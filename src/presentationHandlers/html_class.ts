import path from "path";
import { createPage, getOutDir, getRootDir } from "../utils";
import nunjucks from "nunjucks";

type OptionParams = {
  name: string;
  index?: number;
  imageFilePath?: string;
  htmlFilePath?: string;
};

export class htmlPlugin {
  protected outputDir: string;
  protected rootDir: string; // for read html template
  protected templateOptions: any;

  constructor({ outputDir, rootDir, templateOptions }: { outputDir?: string; rootDir?: string; templateOptions?: any }) {
    this.outputDir = outputDir ?? getOutDir();
    this.rootDir = rootDir ?? getRootDir();
    this.templateOptions = templateOptions ?? {};
  }

  private generateHtml = async (args: any, options: OptionParams) => {
    const { index, name, imageFilePath, htmlFilePath } = options ?? {};
    const tmpName = name?.replace(/^create/, "");
    const fileName = tmpName?.charAt(0)?.toLowerCase() + tmpName?.slice(1);
    const templateFileName = path.resolve(this.rootDir, "./assets/html2", `${fileName}.html`);

    const outfile = imageFilePath ?? path.resolve(this.outputDir, `${index}.png`);
    const htmlFile = htmlFilePath ?? path.resolve(this.outputDir, `${index}.html`);

    return await createPage(this.rootDir, outfile, nunjucks.render(templateFileName, args), { htmlFile, ...this.templateOptions });
  };

  public createSectionDividerPage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createAgendaPage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createExecutiveSummaryPage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createKeyMessageWithSupportsPage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createHypothesisPage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createIssueTreePage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createDriverTreePage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createMeceListPage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createPyramidPrinciplePage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createScqaPage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createSwotPage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createThreeCPage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createFourPPage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createSevenSPage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createValueChainPage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createPorterFiveForcesPage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createBusinessModelCanvasPage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createCustomerJourneyPage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createStakeholderMapPage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createRaciPage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createOkrKpiDashboardPage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createBalancedScorecardPage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createQuarterlyRoadmapPage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createMilestoneTimelinePage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createGanttSimplePage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createWaterfallPage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createFunnelPage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createTwoByTwoMatrixPage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createBcgMatrixPage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createGeMcKinseyMatrixPage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createMarimekkoPlaceholderPage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createBubbleChartPlaceholderPage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createHeatmapPlaceholderPage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createKpiHighlightPage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createBeforeAfterPage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createOptionEvaluationPage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createRiskMitigationPage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createPositioningMapPage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createTamSamSomPage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createMarketDriversPage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createRevenueModelPage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createCostStructurePage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createOrgChartPage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createCapabilityMaturityPage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createTechRoadmapPage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createDigitalMaturityPage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createEcosystemMapPage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createChangeCurvePage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createCommunicationPlanPage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createIntegrationPlanPage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createBenchmarkingTablePage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createSurveyResultsPage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createPersonasPage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createSegmentationPage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createPricingWaterfallPage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createSensitivityAnalysisPage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createPLBreakdownPage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createCashFlowPage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createBalanceSheetPage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createShareholderValueTreePage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createNpvSummaryPage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createScenarioPlanningPage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createComplianceHeatmapPage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createEsgFrameworkPage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createCsrInitiativesPage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createSustainabilityRoadmapPage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createCircularEconomyMapPage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createInnovationFunnelPage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createProductRoadmapPage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createLaunchPlanPage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createPipelineFunnelPage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createSalesDashboardPage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createMarketingMixPage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createCustomerSuccessJourneyPage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createSupportOrgModelPage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createPartnershipMapPage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createMAPipelinePage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createSynergyCapturePage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createCultureValuesPage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };

  public createThankYouContactPage = async (args: any, options: OptionParams) => {
    await this.generateHtml(args, options);
  };
}
