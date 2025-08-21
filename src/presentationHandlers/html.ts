import fs from "fs";
import path from "path";
import { createPage, interpolate } from "../utils";
import nunjucks from "nunjucks";

const rootDir = path.resolve(__dirname, "../../");

const readFile = (filename: string) => {
  return fs.readFileSync(path.resolve(rootDir, "./assets/html/", `${filename}.html`), "utf-8");
};
const filePath = (filename: string) => {
  return path.resolve(rootDir, "./assets/html/", `${filename}.html`);
};
const mkdir = (dirPath: string) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

const now = Date.now();
export const baseDir = path.resolve(rootDir, "outdir", String(now));

const getOutfile = (index: number) => path.resolve(baseDir, `${index}.png`);

mkdir(path.resolve(rootDir, "outdir", String(now)));

export const writeTools = (tools: any) => {
  fs.writeFileSync(path.resolve(baseDir, "tools.json"), JSON.stringify(tools, null, 2), "utf8");
};

const generateHtml = async (args: any, options: { index: number; name: string }) => {
  const { index, name } = options;
  const tmpName = name.replace(/^create/, "");
  const fileName = tmpName.charAt(0).toLowerCase() + tmpName.slice(1)
  await createPage(getOutfile(index), nunjucks.render(filePath(fileName), args));
};
export const createExecutiveSummaryPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createSectionDividerPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};
export const createScqaPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};
export const createAgendaPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};
export const createPyramidPrinciplePage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};
export const createIssueTreePage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};
export const createThankYouContactPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};
