import test from "node:test";
import assert from "node:assert";
import { functionNameToTemplateName, templateNameTofunctionName, toolsToTemplateNames, convertTools } from "../src/commons";
import { tools } from "../src/tools";

// import assert from "node:assert";

test("test temp name", async () => {
  const tempName = functionNameToTemplateName("createThisIsAPen");
  assert.equal(tempName, "thisIsAPen");
  console.log(tempName);

  const funcName = templateNameTofunctionName("thisIsAPen");
  assert.equal(funcName, "createThisIsAPen");
});

test("test temp name", async () => {
  const res = toolsToTemplateNames(tools);
  console.log(res);
});

test("test temp name", async () => {
  const res = convertTools(tools);
  console.log(res);
});
