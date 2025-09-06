#!/usr/bin/env node

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { CallToolRequestSchema, CallToolRequest, ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js";
import { GraphAILogger } from "graphai";

import { tools } from "../tools";
import { htmlPlugin } from "../presentationHandlers/html_class";

import { mkdir, getRootDir, getOutDir } from "../utils";
import { openAIToolsToAnthropicTools } from "../commons";

const server = new Server(
  {
    name: "mulmocast-vision-mcp",
    version: "0.1.0",
  },
  {
    capabilities: {
      tools: {},
    },
  },
);

// List available tools
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return openAIToolsToAnthropicTools(tools);
});

const rootDir = getRootDir();
const outputDir = getOutDir();
mkdir(outputDir);

const handler = new htmlPlugin({ outputDir, rootDir });

let index = 0;
// Handle tool calls
server.setRequestHandler(CallToolRequestSchema, async (request: CallToolRequest) => {
  const { name, arguments: args } = request.params;
  try {
    if (name in handler) {
      const key = name as keyof typeof handler;
      const method = handler[key];
      if (typeof method === "function") {
        index = index + 1;
        await method(args, { name, index });

        return {
          content: [
            {
              type: "text",
              text: `html generated successfully to: ${outputDir}`,
            },
          ],
        };
      }
    }
    throw new Error(`Unknown command: ${name}.`);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    return {
      content: [
        {
          type: "text",
          text: `Error: ${errorMessage}`,
        },
      ],
      isError: true,
    };
  }
});

// Start the server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  GraphAILogger.error("MulmoCast Vision MCP Server running on stdio");
}

main().catch((error) => {
  GraphAILogger.error("Failed to start MCP server:", error);
  process.exit(1);
});
