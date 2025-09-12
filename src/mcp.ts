#!/usr/bin/env node

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { CallToolRequestSchema, CallToolRequest, ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js";

import { tools, mcp_tools } from "./tools";
import { htmlPlugin } from "./html_class";
import { openAIToolsToAnthropicTools, generateUniqueId } from "./commons";

import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

import { getRootDir, getOutDir } from "./utils";

export const getServer = (handler: htmlPlugin) => {
  const server = new Server(
    {
      name: "mulmocast-vision-mcp",
      version: "0.1.4",
    },
    {
      capabilities: {
        tools: {},
      },
    },
  );

  // List available tools
  server.setRequestHandler(ListToolsRequestSchema, async () => {
    return openAIToolsToAnthropicTools([...tools, ...mcp_tools]);
  });

  // Handle tool calls
  server.setRequestHandler(CallToolRequestSchema, async (request: CallToolRequest) => {
    const { name, arguments: args } = request.params;
    console.error([...tools, ...mcp_tools]);
    try {
      if (args) {
        const fileName = generateUniqueId();
        const result = await handler.callNamedFunction(name, args, { outputFileName: fileName });
        return {
          content: [
            {
              type: "text",
              text: result?.text ?? "success",
            },
          ],
        };
      }
      throw new Error(`No args: ${name}.`);
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
  return server;
};

const main = async () => {
  const rootDir = getRootDir();
  const outputDir = getOutDir();
  const htmlDir = "html2";
  const handler = new htmlPlugin({ outputDir, rootDir, htmlDir });

  const server = getServer(handler);
  const transport = new StdioServerTransport();
  await server.connect(transport);
};

main();
