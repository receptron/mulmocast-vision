import * as presentationHandlers from "../src/presentationHandlers/html";

import { toolsRunner } from "../src/runner";
import { data } from "./ai_referencing_80_tool_calls";
import { mkdir, getRootDir, getOutDir } from "../src/utils";

const rootDir = getRootDir();
const outputDir = getOutDir();

export const darkStyle = `
  <style type="text/tailwindcss">
    @layer base {
      body {
        @apply text-white bg-black bg-center;
      }
    }
  </style>
`;

const defaultStyle = `
  <style type="text/tailwindcss">
    @layer base {
      body {
        @apply bg-white text-gray-800;
      }
    }
  </style>
`;

const main = () => {
  mkdir(outputDir);
  toolsRunner(presentationHandlers, data.items);
};

main();
