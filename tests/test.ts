import * as presentationHandlers from "../src/presentationHandlers/html";
import { toolsResponses } from "./tools_sample_response";
import { toolsRunner } from "../src/runner";

const main = () => {
  toolsRunner(presentationHandlers, toolsResponses);
};

main();
