import * as presentationHandlers from "../src/presentationHandlers/html";
//import { toolsResponses } from "./tools_sample_response";
import { toolsRunner } from "../src/runner";
import { data } from "./ai_referencing_80_tool_calls";

const main = () => {
  // toolsRunner(presentationHandlers, toolsResponses);
  toolsRunner(presentationHandlers, data.items);
};

main();
