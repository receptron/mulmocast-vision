import path from "path";
import { createPage, getRootDir, getOutDir, mkdir } from "../utils";
import { functionNameToTemplateName } from "../commons";
import nunjucks from "nunjucks";
import { type PluginOptionParams, type ToolArgs } from "../type";

const rootDir = getRootDir();

export const baseDir = getOutDir();
mkdir(baseDir);

const filePath = (filename: string) => {
  return path.resolve(rootDir, "./html/html/", `${filename}.html`);
};

const generateHtml = async (args: ToolArgs, options: PluginOptionParams) => {
  const { outputFileName, functionName, imageFilePath } = options ?? {};
  if (!functionName) {
    throw new Error("functionName is required");
  }
  const templateFileName = functionNameToTemplateName(functionName);
  const outfile = imageFilePath ?? path.resolve(baseDir, `${outputFileName}.png`);

  await createPage(rootDir, outfile, nunjucks.render(filePath(templateFileName), args));
};

export const callNamedFunction = async (functionName: string, args: ToolArgs, options: PluginOptionParams) => {
  return generateHtml(args, { ...options, functionName });
};
