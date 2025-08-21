import fs from "fs";
import path from "path";
import { createPage, interpolate } from "../utils";
import nunjucks from "nunjucks";

export class htmlPlugin {
  protected outputDir: string;
  protected rootDir: string;
  protected templateOptions: any;

  constructor({ outputDir, rootDir, templateOptions }: { outputDir: string; rootDir: string; templateOptions: any }) {
    this.outputDir = outputDir;
    this.rootDir = rootDir;
    this.templateOptions = templateOptions;
  }

  private async generateHtml(args: any, options: { index: number; name: string }) {
    const { index, name } = options;
    const tmpName = name.replace(/^create/, "");
    const fileName = tmpName.charAt(0).toLowerCase() + tmpName.slice(1);
    const templateFileName = path.resolve(this.rootDir, "./assets/html/", `${fileName}.html`);

    const outfile = path.resolve(this.outputDir, `${index}.png`);

    await createPage(outfile, nunjucks.render(templateFileName, args), this.templateOptions);
  }

  public async createSectionDividerPage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createAgendaPage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createExecutiveSummaryPage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createKeyMessageWithSupportsPage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createHypothesisPage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createIssueTreePage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createDriverTreePage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createMeceListPage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createPyramidPrinciplePage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createScqaPage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createSwotPage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createThreeCPage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createFourPPage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createSevenSPage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createValueChainPage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createPorterFiveForcesPage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createBusinessModelCanvasPage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createCustomerJourneyPage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createStakeholderMapPage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createRaciPage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createOkrKpiDashboardPage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createBalancedScorecardPage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createQuarterlyRoadmapPage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createMilestoneTimelinePage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createGanttSimplePage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createWaterfallPage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createFunnelPage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createTwoByTwoMatrixPage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createBcgMatrixPage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createGeMcKinseyMatrixPage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createMarimekkoPlaceholderPage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createBubbleChartPlaceholderPage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createHeatmapPlaceholderPage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createKpiHighlightPage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createBeforeAfterPage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createOptionEvaluationPage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createRiskMitigationPage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createPositioningMapPage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createTamSamSomPage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createMarketDriversPage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createRevenueModelPage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createCostStructurePage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createOrgChartPage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createCapabilityMaturityPage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createTechRoadmapPage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createDigitalMaturityPage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createEcosystemMapPage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createChangeCurvePage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createCommunicationPlanPage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createIntegrationPlanPage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createBenchmarkingTablePage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createSurveyResultsPage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createPersonasPage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createSegmentationPage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createPricingWaterfallPage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createSensitivityAnalysisPage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createPLBreakdownPage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createCashFlowPage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createBalanceSheetPage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createShareholderValueTreePage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createNpvSummaryPage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createScenarioPlanningPage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createComplianceHeatmapPage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createEsgFrameworkPage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createCsrInitiativesPage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createSustainabilityRoadmapPage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createCircularEconomyMapPage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createInnovationFunnelPage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createProductRoadmapPage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createLaunchPlanPage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createPipelineFunnelPage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createSalesDashboardPage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createMarketingMixPage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createCustomerSuccessJourneyPage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createSupportOrgModelPage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createPartnershipMapPage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createMAPipelinePage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createSynergyCapturePage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createCultureValuesPage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }

  public async createThankYouContactPage(args: any, options: { index: number; name: string }) {
    await this.generateHtml(args, options);
  }
}
