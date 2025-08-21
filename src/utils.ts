import fs from "fs";
import path from "path";
import puppeteer from "puppeteer";
import { fileURLToPath } from "url";

import nunjucks from "nunjucks";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, "../");

export const renderHTMLToImage = async (html: string, outputPath: string, width: number, height: number) => {
  // Use Puppeteer to render HTML to an image
  const browser = await puppeteer.launch({});
  const page = await browser.newPage();

  // Set the page content to the HTML generated from the Markdown
  await page.setContent(html);

  // Adjust page settings if needed (like width, height, etc.)
  await page.setViewport({ width, height });

  // Step 3: Capture screenshot of the page (which contains the Markdown-rendered HTML)
  await page.screenshot({
    path: outputPath as `${string}.png` | `${string}.jpeg` | `${string}.webp`,
  });

  await browser.close();
};

// export const interpolate = (template: string, data: Record<string, string>): string => {
//  return nunjucks.renderString(template, data);
// };
export const interpolate = (template: string, data: Record<string, string>): string => {
  return template.replace(/\$\{(.*?)\}/g, (_, key) => data[key.trim()] ?? "");
};

export const getHTMLFile = (filename: string) => {
  return fs.readFileSync(path.resolve(rootDir, `./assets/html/${filename}.html`), "utf-8");
};

export const createPage = async (file: string, htmlBody: string) => {
  const canvasSize = { width: 1536, height: 1024 };

  const template = getHTMLFile("tailwind");
  const htmlData = interpolate(template, { html_body: htmlBody });
  console.log(htmlData);
  await renderHTMLToImage(htmlData, file, canvasSize.width, canvasSize.height);
};
