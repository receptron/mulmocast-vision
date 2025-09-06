#!/usr/bin/env node

import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { GraphAILogger } from "graphai";

import { mkdir, getRootDir, getOutDir } from "../utils";
import { getServer } from "./core";

// Start the server
async function main() {
  const rootDir = getRootDir();
  const outputDir = getOutDir();
  mkdir(outputDir);

  const server = getServer(rootDir, outputDir);
  const transport = new StdioServerTransport();
  await server.connect(transport);
  GraphAILogger.error("MulmoCast Vision MCP Server running on stdio");
}

main().catch((error) => {
  GraphAILogger.error("Failed to start MCP server:", error);
  process.exit(1);
});
