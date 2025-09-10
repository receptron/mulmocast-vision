import * as presentationHandlers from "../src/presentationHandlers/html";

import { toolsRunner } from "./runner";
import { data } from "./ai_referencing_80_tool_calls";
import { mkdir, getOutDir } from "../src/utils";

const outputDir = getOutDir();

const main = () => {
  mkdir(outputDir);
  toolsRunner(presentationHandlers, data.items);
};

main();
