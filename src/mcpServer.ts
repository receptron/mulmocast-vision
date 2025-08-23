import "dotenv/config";
import http from "http";
import { defaultTestContext } from "graphai";
import { openAIAgent } from "@graphai/openai_agent";
import { tools } from "./tools";
import { htmlPlugin } from "./presentationHandlers/html_class";
import { toolsRunner } from "./runner";
import { mkdir, getRootDir, getOutDir, writeTools } from "./utils";

const rootDir = getRootDir();

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/tools") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ tools }));
    return;
  }

  if (req.method === "POST" && req.url === "/call") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", async () => {
      try {
        const { name, args } = JSON.parse(body);
        const outputDir = getOutDir();
        mkdir(outputDir);
        const handler = new htmlPlugin({ outputDir, rootDir, templateOptions: {} });
        await toolsRunner(handler, [{ name, arguments: args }]);
        writeTools(outputDir, [{ name, arguments: args }]);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ outputDir }));
      } catch (err: any) {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: err.message }));
      }
    });
    return;
  }

  if (req.method === "POST" && req.url === "/presentation") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", async () => {
      try {
        const { prompt } = JSON.parse(body);
        const namedInputs = { prompt: [prompt] };
        const params = { tool_choice: "auto" as const, tools };
        const response = (await openAIAgent.agent({
          ...defaultTestContext,
          namedInputs,
          params,
        })) as any;
        const outputDir = getOutDir();
        mkdir(outputDir);
        const handler = new htmlPlugin({ outputDir, rootDir, templateOptions: {} });
        if (response && response.tool_calls) {
          await toolsRunner(handler, response.tool_calls);
          writeTools(outputDir, response.tool_calls);
        }
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ outputDir, tool_calls: response.tool_calls }));
      } catch (err: any) {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: err.message }));
      }
    });
    return;
  }

  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ error: "not found" }));
});

const port = Number(process.env.PORT) || 3000;
server.listen(port, () => {
  console.log(`MCP server listening on port ${port}`);
});

