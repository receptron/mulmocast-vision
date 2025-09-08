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

export const createSectionDividerSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createAgendaSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createExecutiveSummarySlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createKeyMessageWithSupportsSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createHypothesisSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createIssueTreeSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createDriverTreeSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createMeceListSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createPyramidPrincipleSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createScqaSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createSwotSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createThreeCSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createFourPSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createSevenSSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createValueChainSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createPorterFiveForcesSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createBusinessModelCanvasSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createCustomerJourneySlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createStakeholderMapSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createRaciSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createOkrKpiDashboardSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createBalancedScorecardSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createQuarterlyRoadmapSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createMilestoneTimelineSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createGanttSimpleSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createWaterfallSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createFunnelSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createTwoByTwoMatrixSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createBcgMatrixSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createGeMcKinseyMatrixSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createMarimekkoPlaceholderSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createBubbleChartPlaceholderSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createHeatmapPlaceholderSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createKpiHighlightSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createBeforeAfterSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createOptionEvaluationSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createRiskMitigationSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createPositioningMapSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createTamSamSomSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createMarketDriversSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createRevenueModelSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createCostStructureSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createOrgChartSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createCapabilityMaturitySlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createTechRoadmapSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createDigitalMaturitySlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createEcosystemMapSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createChangeCurveSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createCommunicationPlanSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createIntegrationPlanSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createBenchmarkingTableSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createSurveyResultsSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createPersonasSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createSegmentationSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createPricingWaterfallSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createSensitivityAnalysisSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createPLBreakdownSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createCashFlowSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createBalanceSheetSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createShareholderValueTreeSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createNpvSummarySlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createScenarioPlanningSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createComplianceHeatmapSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createEsgFrameworkSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createCsrInitiativesSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createSustainabilityRoadmapSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createCircularEconomyMapSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createInnovationFunnelSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createProductRoadmapSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createLaunchPlanSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createPipelineFunnelSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createSalesDashboardSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createMarketingMixSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createCustomerSuccessJourneySlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createSupportOrgModelSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createPartnershipMapSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createMAPipelineSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createSynergyCaptureSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createCultureValuesSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};

export const createThankYouContactSlide = async (args: ToolArgs, options: PluginOptionParams) => {
  await generateHtml(args, options);
};
