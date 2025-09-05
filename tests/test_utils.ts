import test from "node:test";
import assert from "node:assert";
import { functionNameToTemplateName, templateNameTofunctionName, toolsToTemplateNames } from "../src/commons";
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
