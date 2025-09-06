export type OpenAITool = {
  function: {
    name: string;
    description: string;
    parameters: {
      type: string;
      required: string[];
      properties: Record<string, unknown>;
    };
  };
};
