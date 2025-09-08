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

  private generateHtml = async (args: ToolArgs, options: PluginOptionParams) => {
    const { outputFileName, functionName, imageFilePath, htmlFilePath } = options ?? {};
    const templateFileName = functionNameToTemplateName(functionName);
    const templateFilePath = path.resolve(this.rootDir, "./html/html2", `${templateFileName}.html`);

    const outfile = imageFilePath ?? path.resolve(this.outputDir, this.sessionDir, `${outputFileName}.png`);
    const htmlFile = htmlFilePath ?? path.resolve(this.outputDir, this.sessionDir, `${outputFileName}.html`);

    await createPage(this.rootDir, outfile, nunjucks.render(templateFilePath, args), { htmlFile, ...this.templateOptions });

    return {
      text: `html generated successfully to: ${outfile}`,
    };
  };

  public createSectionDividerSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createAgendaSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createExecutiveSummarySlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createKeyMessageWithSupportsSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createHypothesisSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createIssueTreeSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createDriverTreeSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createMeceListSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createPyramidPrincipleSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createScqaSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createSwotSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createThreeCSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createFourPSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createSevenSSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createValueChainSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createPorterFiveForcesSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createBusinessModelCanvasSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createCustomerJourneySlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createStakeholderMapSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createRaciSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createOkrKpiDashboardSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createBalancedScorecardSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createQuarterlyRoadmapSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createMilestoneTimelineSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createGanttSimpleSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createWaterfallSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createFunnelSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createTwoByTwoMatrixSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createBcgMatrixSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createGeMcKinseyMatrixSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createMarimekkoPlaceholderSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createBubbleChartPlaceholderSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createHeatmapPlaceholderSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createKpiHighlightSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createBeforeAfterSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createOptionEvaluationSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createRiskMitigationSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createPositioningMapSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createTamSamSomSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createMarketDriversSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createRevenueModelSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createCostStructureSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createOrgChartSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createCapabilityMaturitySlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createTechRoadmapSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createDigitalMaturitySlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createEcosystemMapSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createChangeCurveSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createCommunicationPlanSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createIntegrationPlanSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createBenchmarkingTableSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createSurveyResultsSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createPersonasSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createSegmentationSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createPricingWaterfallSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createSensitivityAnalysisSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createPLBreakdownSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createCashFlowSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createBalanceSheetSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createShareholderValueTreeSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createNpvSummarySlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createScenarioPlanningSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createComplianceHeatmapSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createEsgFrameworkSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createCsrInitiativesSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createSustainabilityRoadmapSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createCircularEconomyMapSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createInnovationFunnelSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createProductRoadmapSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createLaunchPlanSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createPipelineFunnelSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createSalesDashboardSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createMarketingMixSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createCustomerSuccessJourneySlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createSupportOrgModelSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createPartnershipMapSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createMAPipelineSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createSynergyCaptureSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createCultureValuesSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
  };

  public createThankYouContactSlide = async (args: ToolArgs, options: PluginOptionParams) => {
    return await this.generateHtml(args, options);
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
