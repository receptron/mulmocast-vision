// import * as presentationHandlers from "../src/presentationHandlers/html";
//import { toolsResponses } from "./tools_sample_response";
import fs from "fs";
import path from "path";
import { htmlPlugin } from "../src/presentationHandlers/html_class";

import { toolsRunner } from "../src/runner";
import { data } from "./ai_referencing_80_tool_calls";
import { mkdir, getRootDir, getOutDir } from "../src/utils";

const rootDir = getRootDir();
const outputDir = getOutDir();

const main = () => {
  mkdir(outputDir);
  const handler = new htmlPlugin({ outputDir, rootDir });
  toolsRunner(handler, data.items);
  // toolsRunner(presentationHandlers, toolsResponses);
};

main();
