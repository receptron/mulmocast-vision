// utils for browser and node.

export const functionNameToTemplateName = (functionName: string) => {
  const tmpName = functionName.replace(/^create/, "");
  const fileName = tmpName.charAt(0).toLowerCase() + tmpName.slice(1);
  return fileName;
};

export const templateNameTofunctionName = (templateName: string) => {
  return "create" + templateName.charAt(0).toUpperCase() + templateName.slice(1);
};

export const toolsToTemplateNames = (tools: any[]) => {
  return tools.map((tool) => {
    return functionNameToTemplateName(tool.function.name);
  });
};

export const convertTools = (tools: any[]) => {
  return tools.map(
    (tool: {
      function: {
        name: string;
        description: string;
        parameters: {
          type: string;
          required: string[];
          properties: Record<string, unknown>;
        };
      };
    }) => {
      const { name, description, parameters } = tool.function;

      const { type, properties, required } = parameters;
      const newProperties = {
        ...properties,
        talkTrack: {
          type: "string",
          description: "What the presenter will say for this slide (1–3 sentences).",
        },
      };
      console.log(newProperties);
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
    },
  );
};
