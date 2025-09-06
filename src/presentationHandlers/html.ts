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
  const templateFileName = functionNameToTemplateName(functionName);
  const outfile = imageFilePath ?? path.resolve(baseDir, `${outputFileName}.png`);

  await createPage(rootDir, outfile, nunjucks.render(filePath(templateFileName), args));
};

export const createSectionDividerPage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createAgendaPage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createExecutiveSummaryPage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createKeyMessageWithSupportsPage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createHypothesisPage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createIssueTreePage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createDriverTreePage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createMeceListPage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createPyramidPrinciplePage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createScqaPage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createSwotPage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createThreeCPage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createFourPPage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createSevenSPage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createValueChainPage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createPorterFiveForcesPage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createBusinessModelCanvasPage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createCustomerJourneyPage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createStakeholderMapPage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createRaciPage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createOkrKpiDashboardPage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createBalancedScorecardPage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createQuarterlyRoadmapPage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createMilestoneTimelinePage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createGanttSimplePage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createWaterfallPage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createFunnelPage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createTwoByTwoMatrixPage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createBcgMatrixPage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createGeMcKinseyMatrixPage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createMarimekkoPlaceholderPage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createBubbleChartPlaceholderPage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createHeatmapPlaceholderPage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createKpiHighlightPage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createBeforeAfterPage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createOptionEvaluationPage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createRiskMitigationPage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createPositioningMapPage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createTamSamSomPage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createMarketDriversPage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createRevenueModelPage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createCostStructurePage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createOrgChartPage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createCapabilityMaturityPage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createTechRoadmapPage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createDigitalMaturityPage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createEcosystemMapPage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createChangeCurvePage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createCommunicationPlanPage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createIntegrationPlanPage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createBenchmarkingTablePage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createSurveyResultsPage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createPersonasPage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createSegmentationPage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createPricingWaterfallPage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createSensitivityAnalysisPage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createPLBreakdownPage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createCashFlowPage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createBalanceSheetPage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createShareholderValueTreePage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createNpvSummaryPage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createScenarioPlanningPage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createComplianceHeatmapPage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createEsgFrameworkPage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createCsrInitiativesPage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createSustainabilityRoadmapPage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createCircularEconomyMapPage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createInnovationFunnelPage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createProductRoadmapPage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createLaunchPlanPage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createPipelineFunnelPage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createSalesDashboardPage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createMarketingMixPage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createCustomerSuccessJourneyPage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createSupportOrgModelPage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createPartnershipMapPage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createMAPipelinePage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createSynergyCapturePage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createCultureValuesPage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createThankYouContactPage = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};
