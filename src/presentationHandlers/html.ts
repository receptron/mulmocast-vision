import fs from "fs";
import path from "path";
import { createPage, getRootDir, getOutDir, mkdir } from "../utils";
import nunjucks from "nunjucks";

const rootDir = getRootDir();

export const baseDir = getOutDir();
mkdir(baseDir);

const filePath = (filename: string) => {
  return path.resolve(rootDir, "./assets/html/", `${filename}.html`);
};

export const writeTools = (tools: any) => {
  fs.writeFileSync(path.resolve(baseDir, "tools.json"), JSON.stringify(tools, null, 2), "utf8");
};

const generateHtml = async (args: any, options: { index: number; name: string }) => {
  const { index, name } = options;
  const tmpName = name.replace(/^create/, "");
  const fileName = tmpName.charAt(0).toLowerCase() + tmpName.slice(1);
  console.log(path.resolve(baseDir, `${index}.png`));
  await createPage(rootDir, path.resolve(baseDir, `${index}.png`), nunjucks.render(filePath(fileName), args));
};

export const createSectionDividerPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createAgendaPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createExecutiveSummaryPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createKeyMessageWithSupportsPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createHypothesisPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createIssueTreePage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createDriverTreePage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createMeceListPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createPyramidPrinciplePage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createScqaPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createSwotPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createThreeCPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createFourPPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createSevenSPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createValueChainPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createPorterFiveForcesPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createBusinessModelCanvasPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createCustomerJourneyPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createStakeholderMapPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createRaciPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createOkrKpiDashboardPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createBalancedScorecardPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createQuarterlyRoadmapPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createMilestoneTimelinePage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createGanttSimplePage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createWaterfallPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createFunnelPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createTwoByTwoMatrixPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createBcgMatrixPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createGeMcKinseyMatrixPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createMarimekkoPlaceholderPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createBubbleChartPlaceholderPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createHeatmapPlaceholderPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createKpiHighlightPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createBeforeAfterPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createOptionEvaluationPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createRiskMitigationPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createPositioningMapPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createTamSamSomPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createMarketDriversPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createRevenueModelPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createCostStructurePage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createOrgChartPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createCapabilityMaturityPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createTechRoadmapPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createDigitalMaturityPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createEcosystemMapPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createChangeCurvePage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createCommunicationPlanPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createIntegrationPlanPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createBenchmarkingTablePage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createSurveyResultsPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createPersonasPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createSegmentationPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createPricingWaterfallPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createSensitivityAnalysisPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createPLBreakdownPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createCashFlowPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createBalanceSheetPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createShareholderValueTreePage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createNpvSummaryPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createScenarioPlanningPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createComplianceHeatmapPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createEsgFrameworkPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createCsrInitiativesPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createSustainabilityRoadmapPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createCircularEconomyMapPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createInnovationFunnelPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createProductRoadmapPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createLaunchPlanPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createPipelineFunnelPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createSalesDashboardPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createMarketingMixPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createCustomerSuccessJourneyPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createSupportOrgModelPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createPartnershipMapPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createMAPipelinePage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createSynergyCapturePage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createCultureValuesPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};

export const createThankYouContactPage = async (args: any, options: { index: number; name: string }) => {
  await generateHtml(args, options);
};
