#!/usr/bin/env node

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { CallToolRequestSchema, CallToolRequest, ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js";

import { tools } from "../tools";
import { htmlPlugin } from "../presentationHandlers/html_class";
import { openAIToolsToAnthropicTools, generateUniqueId } from "../commons";

export const getServer = (rootDir: string, outputDir: string) => {
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

  const handler = new htmlPlugin({ outputDir, rootDir });

  // Handle tool calls
  server.setRequestHandler(CallToolRequestSchema, async (request: CallToolRequest) => {
    const { name, arguments: args } = request.params;
    try {
      if (name in handler) {
        const key = name as keyof typeof handler;
        const method = handler[key];
        if (typeof method === "function" && args) {
          const fileName = generateUniqueId();
          await method(args, { functionName: name, outputFileName: fileName });

          return {
            content: [
              {
                type: "text",
                text: `html generated successfully to: ${outputDir} ${fileName}`,
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
  return server;
};
