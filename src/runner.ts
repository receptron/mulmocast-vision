import { GraphAI } from "graphai";
// options: fileName, style
export const toolsRunner = async (handler: any, response: any, options: any) => {
  const nodes = {};

  response.forEach((tool, index) => {
    if (handler[tool.name]) {
      nodes[index] = {
        agent: async (namedInput) => {
          await handler[tool.name](namedInput.data.args, namedInput.data.options);
        },
        inputs: {
          data: { args: tool.arguments, options: { name: tool.name, index } },
        },
      };
    } else {
      console.log(tool.name);
    }
  });

  const data = {
    version: 0.5,
    concurrency: 4,
    nodes,
  };
  const graphai = new GraphAI(data, {});
  await graphai.run();
};
