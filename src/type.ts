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

export type PluginOptionParams = {
  functionName: string; // functionName tools called
  outputFileName?: number | string; // output png html file name. A file with this name will be written to outputDir.
  imageFilePath?: string; // The full path to the output image, including the dir and extent. This setting causes outputFileName to be ignored.
  htmlFilePath?: string; // The full path to the output html, including the dir and extent. This setting causes outputFileName to be ignored.
};
