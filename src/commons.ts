// utils for browser and node.


// create ~~~
export const functionNameToTemplateName = (functionName: string) => {
  const tmpName = functionName.replace(/^create/, "");
  const fileName = tmpName.charAt(0).toLowerCase() + tmpName.slice(1);
  return fileName;
};

export const templateNameTofunctionName = (templateName: string) => {
  return "create" + templateName.charAt(0).toUpperCase() + templateName.slice(1);
};

