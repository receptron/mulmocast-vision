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
    return functionNameToTemplateName(tool.function.name)
  });
};
