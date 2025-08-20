// options: fileName, style
export const toolsRunner = (handler: any, response: any, options: any) => {
  response.forEach((tool, index) => {
    if (handler[tool.name]) {
      handler[tool.name](tool.arguments, { name: tool.name, index });
    }
  });
};
