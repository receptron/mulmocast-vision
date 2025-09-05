// utils for browser and node.


// create ~~~
const functionNameToTemplateName = (functionName: string) => {
  const tmpName = name.replace(/^create/, "");
  const fileName = tmpName.charAt(0).toLowerCase() + tmpName.slice(1);
  return fileName;
};

const templateNameTofunctionName = (templateName: string) => {
  return "create" + templateName.charAt(0).toUpperCase() + templateName.slice(1);
};

