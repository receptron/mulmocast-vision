import path from "path";
import fs from "fs";
import PDFDocument from "pdfkit";

import { createPage, getOutDir, getRootDir, mkdir } from "../utils";
import { functionNameToTemplateName } from "../commons";
import nunjucks from "nunjucks";
import { type PluginOptionParams, type ToolArgs } from "../type";

export class htmlPlugin {
  protected outputDir: string;
  protected rootDir: string; // for read html template
  protected sessionDir: string;
  protected templateOptions: any;

  constructor({ outputDir, rootDir, templateOptions }: { outputDir?: string; rootDir?: string; templateOptions?: any }) {
    this.outputDir = outputDir ?? getOutDir();
    this.rootDir = rootDir ?? getRootDir();
    this.sessionDir = "";
    this.templateOptions = templateOptions ?? {};
  }

  public callNamedFunction = async (functionName: string, args: ToolArgs, options: PluginOptionParams) => {
    if ((this as any)[functionName]) {
      return (this as any)[functionName](args, { ...options, functionName });
    }
    return this.generateHtml(args, { ...options, functionName });
  };

  private generateHtml = async (args: ToolArgs, options: PluginOptionParams) => {
    const { outputFileName, functionName, imageFilePath, htmlFilePath } = options ?? {};
    if (!functionName) {
      throw new Error("functionName is required");
    }
    const templateFileName = functionNameToTemplateName(functionName);
    const templateFilePath = path.resolve(this.rootDir, "./html/html2", `${templateFileName}.html`);

    const outfile = imageFilePath ?? path.resolve(this.outputDir, this.sessionDir, `${outputFileName}.png`);
    const htmlFile = htmlFilePath ?? path.resolve(this.outputDir, this.sessionDir, `${outputFileName}.html`);

    await createPage(this.rootDir, outfile, nunjucks.render(templateFilePath, args), { htmlFile, ...this.templateOptions });

    return {
      text: `html generated successfully to: ${outfile}`,
    };
  };

  // for mcp
  public setDirectory = async (args: ToolArgs, __options: PluginOptionParams) => {
    this.sessionDir = args.directoryName as string;
    const outputDir = path.resolve(this.outputDir, this.sessionDir);
    console.error(outputDir);
    mkdir(outputDir);

    return {
      text: `set directory: ${this.sessionDir}`,
    };
  };

  public createPDF = async (__args: ToolArgs, __options: PluginOptionParams) => {
    const imageWidth = 1536;
    const imageHeight = 1024;

    const pageWidth = imageWidth * 0.75; // 1152pt
    const pageHeight = imageHeight * 0.75; // 768pt

    const outputDir = path.resolve(this.outputDir, this.sessionDir);

    const files = fs
      .readdirSync(outputDir)
      .filter((f) => f.toLowerCase().endsWith(".png"))
      .sort(new Intl.Collator("ja", { numeric: true }).compare);

    if (files.length === 0) {
      console.error("no PNG file");
      return;
    }

    const doc = new PDFDocument({
      size: [pageWidth, pageHeight],
      margins: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },
    });
    doc.pipe(fs.createWriteStream(path.resolve(outputDir, "result.pdf")));

    files.forEach((f, i) => {
      if (i > 0) {
        doc.addPage({
          size: [pageWidth, pageHeight],
          margins: { top: 0, bottom: 0, left: 0, right: 0 },
        });
      }
      doc.image(path.join(outputDir, f), 0, 0, {
        width: pageWidth,
        height: pageHeight,
      });
    });

    doc.end();

    return {
      text: `pdf created: ${outputDir}`,
    };
  };
}
