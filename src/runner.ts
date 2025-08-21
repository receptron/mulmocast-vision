import { GraphAI } from "graphai"
// options: fileName, style
export const toolsRunner = async (handler: any, response: any, options: any) => {
  const nodes = {};
  
  response.forEach((tool, index) => {
    if (handler[tool.name]) {
      // handler[tool.name](tool.arguments, { name: tool.name, index });
      nodes[index + "_arg"] = {value: {arg: tool.arguments, opt: { name: tool.name, index }}};
      nodes[index] = {
        agent: async (namedInput) => {
          console.log(namedInput);
          await handler[tool.name](namedInput.arg.arg, namedInput.arg.opt);
        },
        inputs: {
          arg: ":" + index + "_arg"
        }
      };
    } else {
      console.log(tool.name);
    }
  });

  const data = {
    version: 0.5,
    concurrency: 4,
    nodes
  };
  const graphai = new GraphAI(data, {});
  await graphai.run();
};
