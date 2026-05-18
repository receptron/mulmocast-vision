import { GraphAI, type NodeData } from "graphai";
import { type ToolArgs, type PluginOptionParams } from "../src/type";

type ToolCallHandler = {
  callNamedFunction: (name: string, args: ToolArgs, options: PluginOptionParams) => Promise<void>;
};

type ToolCallItem = {
  name: string;
  arguments: unknown;
};

export const toolsRunner = async (handler: ToolCallHandler, response: ToolCallItem[]) => {
  const nodes: Record<string, NodeData> = {};

  response.forEach((tool, index) => {
    nodes[String(index)] = {
      agent: async (namedInput: { data: { args: unknown; options: { name: string; index: number } } }) => {
        await handler.callNamedFunction(tool.name, namedInput.data.args, namedInput.data.options);
      },
      inputs: {
        data: { args: tool.arguments, options: { outputFileName: index } },
      },
    };
  });

  const data = {
    version: 0.5,
    concurrency: 4,
    nodes,
  };
  const graphai = new GraphAI(data, {});
  await graphai.run();
};
