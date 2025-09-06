// utils for browser and node.
import { type OpenAITool } from "./type";

export const functionNameToTemplateName = (functionName: string) => {
  const tmpName = functionName.replace(/^create/, "");
  const fileName = tmpName.charAt(0).toLowerCase() + tmpName.slice(1);
  return fileName;
};

export const templateNameTofunctionName = (templateName: string) => {
  return "create" + templateName.charAt(0).toUpperCase() + templateName.slice(1);
};

export const toolsToTemplateNames = (tools: OpenAITool[]) => {
  return tools.map((tool) => {
    return functionNameToTemplateName(tool.function.name);
  });
};

export const openAIToolsToAnthropicTools = (tools: OpenAITool[]) => {
  return {
    tools: tools.map((tool) => {
      const { name, description, parameters } = tool.function;
      return { name, description, inputSchema: parameters };
    }),
  };
};

export const convertTools = (tools: OpenAITool[]) => {
  return tools.map((tool: OpenAITool) => {
    const { name, description, parameters } = tool.function;

    const { type, properties, required } = parameters;
    const newProperties = {
      ...properties,
      talkTrack: {
        type: "string",
        description: "What the presenter will say for this slide (1–3 sentences).",
      },
    };

    return {
      type: "function",
      function: {
        name: "mulmoVisionAgent--" + name,
        description,
        parameters: {
          type,
          properties: newProperties,
          required,
        },
      },
    };
  });
};
