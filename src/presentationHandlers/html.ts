import fs from "fs";
import path from "path";
import { createPage, interpolate } from "../utils";

const rootDir = path.resolve(__dirname, "../../");

const readFile = (filename: string) => {
  return fs.readFileSync(path.resolve(rootDir, "./assets/html/", `${filename}.html`), "utf-8");
};
const getOutfile = (index: number) => path.resolve(rootDir, "outdir", `${index}.png`);

export const createExecutiveSummaryPage = async (args: any, options: { index: number; name: string }) => {
  const { bullets, title } = args;
  const { index, name } = options;
  const body = readFile(name);
  const list = bullets.map((data) => "<li>" + data + "</li>").join("\n");
  
  await createPage(getOutfile(index), interpolate(body, { list, title }));
};

export const createSectionDividerPage = async (args: any, options: { index: number; name: string }) => {
  const { index, name } = options;
  const body = readFile(name);
  await createPage(getOutfile(index), interpolate(body, args));
};
export const createScqaPage = async (args: any, options: { index: number; name: string }) => {
  const { index, name } = options;
  const body = readFile(name);

  await createPage(getOutfile(index), interpolate(body, args));
};
export const createAgendaPage = async (args: any, options: { index: number; name: string }) => {
  const { items } = args;
  const { index, name } = options;
  const body = readFile(name);
  const itemsHtml = items.map((data) => "<li>" + data + "</li>").join("\n");
  
  await createPage(getOutfile(index), interpolate(body, { ...args, itemsHtml }));
};
export const createPyramidPrinciplePage = async (args: any, options: { index: number; name: string }) => {
  const { index, name } = options;
  const body = readFile(name);
  
  await createPage(getOutfile(index), interpolate(body, args));
};
export const createIssueTreePage = async (args: any, options: { index: number; name: string }) => {
  const { bullets, title } = args;
  const { index, name } = options;
  const body = readFile(name);
  // const list = bullets.map((data) => "<li>" + data + "</li>").join("\n");
  
  await createPage(getOutfile(index), interpolate(body, args));
};
export const createThankYouContactPage = async (args: any, options: { index: number; name: string }) => {
  const { bullets, title } = args;
  const { index, name } = options;
  const body = readFile(name);
  
  await createPage(getOutfile(index), interpolate(body, args));
};
