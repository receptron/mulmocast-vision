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

const now = Date.now();

const getOutfile = (index: number) => path.resolve(rootDir, "outdir", String(now), `${index}.png`);

const mkdir = (dirPath: string) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};
mkdir(path.resolve(rootDir, "outdir", String(now)));

const renderPage = (body, args) => {
  return nunjucks.render(body, args);
};

export const createExecutiveSummaryPage = async (args: any, options: { index: number; name: string }) => {
  const { index, name } = options;
  await createPage(getOutfile(index), renderPage(filePath(name), args));
};

export const createSectionDividerPage = async (args: any, options: { index: number; name: string }) => {
  const { index, name } = options;
  await createPage(getOutfile(index), renderPage(filePath(name), args));
};
export const createScqaPage = async (args: any, options: { index: number; name: string }) => {
  const { index, name } = options;
  await createPage(getOutfile(index), renderPage(filePath(name), args));
};
export const createAgendaPage = async (args: any, options: { index: number; name: string }) => {
  const { index, name } = options;
  await createPage(getOutfile(index), renderPage(filePath(name), args));
};
export const createPyramidPrinciplePage = async (args: any, options: { index: number; name: string }) => {
  const { index, name } = options;
  await createPage(getOutfile(index), renderPage(filePath(name), args));
};
export const createIssueTreePage = async (args: any, options: { index: number; name: string }) => {
  const { index, name } = options;
  await createPage(getOutfile(index), renderPage(filePath(name), args));
};
export const createThankYouContactPage = async (args: any, options: { index: number; name: string }) => {
  const { index, name } = options;
  await createPage(getOutfile(index), renderPage(filePath(name), args));
};
