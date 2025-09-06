#!/usr/bin/env node

import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

import { mkdir, getRootDir } from "../utils";
import { getServer } from "./core";

import os from "os";
import path from "path";

const main = async () => {
  const rootDir = getRootDir();

  const documentsDir = path.join(os.homedir(), "Documents");
  const outputDir = path.join(documentsDir, "mulmocast-vision");
  mkdir(outputDir);

  const server = getServer(rootDir, outputDir);
  const transport = new StdioServerTransport();
  await server.connect(transport);
};

main();
