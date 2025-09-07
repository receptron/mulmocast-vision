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

    return await createPage(this.rootDir, outfile, nunjucks.render(templateFilePath, args), { htmlFile, ...this.templateOptions });
  };

  public createSectionDividerPage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createAgendaPage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createExecutiveSummaryPage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createKeyMessageWithSupportsPage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createHypothesisPage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createIssueTreePage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createDriverTreePage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createMeceListPage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createPyramidPrinciplePage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createScqaPage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createSwotPage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createThreeCPage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createFourPPage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createSevenSPage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createValueChainPage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createPorterFiveForcesPage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createBusinessModelCanvasPage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createCustomerJourneyPage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createStakeholderMapPage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createRaciPage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createOkrKpiDashboardPage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createBalancedScorecardPage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createQuarterlyRoadmapPage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createMilestoneTimelinePage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createGanttSimplePage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createWaterfallPage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createFunnelPage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createTwoByTwoMatrixPage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createBcgMatrixPage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createGeMcKinseyMatrixPage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createMarimekkoPlaceholderPage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createBubbleChartPlaceholderPage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createHeatmapPlaceholderPage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createKpiHighlightPage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createBeforeAfterPage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createOptionEvaluationPage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createRiskMitigationPage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createPositioningMapPage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createTamSamSomPage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createMarketDriversPage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createRevenueModelPage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createCostStructurePage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createOrgChartPage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createCapabilityMaturityPage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createTechRoadmapPage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createDigitalMaturityPage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createEcosystemMapPage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createChangeCurvePage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createCommunicationPlanPage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createIntegrationPlanPage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createBenchmarkingTablePage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createSurveyResultsPage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createPersonasPage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createSegmentationPage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createPricingWaterfallPage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createSensitivityAnalysisPage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createPLBreakdownPage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createCashFlowPage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createBalanceSheetPage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createShareholderValueTreePage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createNpvSummaryPage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createScenarioPlanningPage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createComplianceHeatmapPage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createEsgFrameworkPage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createCsrInitiativesPage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createSustainabilityRoadmapPage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createCircularEconomyMapPage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createInnovationFunnelPage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createProductRoadmapPage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createLaunchPlanPage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createPipelineFunnelPage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createSalesDashboardPage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createMarketingMixPage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createCustomerSuccessJourneyPage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createSupportOrgModelPage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createPartnershipMapPage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createMAPipelinePage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createSynergyCapturePage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createCultureValuesPage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  public createThankYouContactPage = async (args: ToolArgs, options: PluginOptionParams) => {
    await this.generateHtml(args, options);
  };

  // for mcp
  public setDirectory = async (args: ToolArgs, __options: PluginOptionParams) => {
    this.sessionDir = args.directoryName as string;
    const outputDir = path.resolve(this.outputDir, this.sessionDir);
    console.error(outputDir);
    mkdir(outputDir);
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
  };
}
