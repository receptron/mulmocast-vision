import { GraphAI, type NodeData } from "graphai";
// options: fileName, style
export const toolsRunner = async (handler: any, response: any) => {
  const nodes: Record<string, NodeData> = {};

  response.forEach((tool: { name: string; arguments: unknown }, index: number) => {
    if (handler[tool.name]) {
      nodes[String(index)] = {
        agent: async (namedInput: { data: { args: unknown; options: { name: string; index: number } } }) => {
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
