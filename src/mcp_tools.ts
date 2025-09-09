import { OpenAITool } from "./type";

export const mcp_tools: OpenAITool[] = [
  {
    type: "function",
    function: {
      name: "setDirectory",
      description:
        "Specify a directory for each session and output the content to that directory. Call it once before creating a slide, and again when creating the next new slide.",
      parameters: {
        type: "object",
        properties: {
          directoryName: { type: "string", description: "Directory name" },
        },
        required: ["directoryName"],
      },
    },
  },
  {
    type: "function",
    function: {
      name: "createPDF",
      description: "combine images to create a PDF.",
      parameters: {
        type: "object",
        properties: {
          status: { type: "string", description: "statis" },
        },
        required: ["status"],
      },
    },
  },
];
