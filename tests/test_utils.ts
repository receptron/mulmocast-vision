import test from "node:test";
import assert from "node:assert";
import { functionNameToTemplateName, templateNameTofunctionName } from "../src/commons";
// import assert from "node:assert";

test("test temp name", async () => {
  const tempName = functionNameToTemplateName("createThisIsAPen");
  assert.equal(tempName, "thisIsAPen");
  console.log(tempName);

  const funcName = templateNameTofunctionName("thisIsAPen");
  assert.equal(funcName, "createThisIsAPen");

});
