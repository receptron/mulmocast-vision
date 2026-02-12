[![npm version](https://badge.fury.io/js/mulmocast-vision.svg)](https://badge.fury.io/js/mulmocast-vision)
# mulmocast-vision

> **Note**: This repository has been archived. Development has moved to [mulmocast-plus](https://github.com/receptron/mulmocast-plus) monorepo (`packages/mulmocast-vision`).

**mulmocast-vision** is a tool that uses LLMs via MCP (Model Context Protocol) to automatically generate presentation slides, similar to PowerPoint.  
With **80+ business-oriented slide templates**, you can quickly create proposals, strategy decks, and other professional materials.  


## ✨ Features

- 📑 **80+ Rich Templates**  
  Business-optimized designs for proposals, reports, and analysis documents

- ⚡ **Instant Generation**  
  Create professional slides in seconds using LLMs via :contentReference[oaicite:1]{index=1} (MCP)

- ⚙️ **Simple Setup**  
  Just add a small config to your MCP client (e.g. :contentReference[oaicite:2]{index=2}) to start

- 💾 **Auto Save & Easy Export**  
  Outputs are automatically saved under `~/Documents/mulmocast-vision/`  
  Export instantly to PDF

- 🎨 **Fully Customizable**  
  HTML-based templates allow fine-grained design tweaks or full redesigns

You can create documents like these in just a few minutes.

[Sample AI Company Analysis Slide (PDF)](https://github.com/isamu/slide_example/blob/master/pdf/AI_Companies_Corporate_Analysis_2025.pdf)


## No Installation Needed  

Runs directly with `npx`. No global install required.  


## Setup

Here is an example for Claude desktop. Add the following to your `claude_desktop_config.json`.  
You can use similar settings for other MCPs.

```json
// claude_desktop_config.json
"mulmocast-vision": {
  "command": "npx",
  "args": [
    "mulmocast-vision@latest"
  ],
  "transport": {
    "stdio": true
  }
}
```

That's all for the setup.  
If the path to `npx` is not set, specify the full path.  
If `npx` is not installed, please install it in advance.


## Usage  

1. Launch an MCP-compatible client (e.g., Claude Desktop)  
2. Just give an instruction like "Compare corporate analysis of AI companies such as OpenAi Anthropic Replicate. About 20 slides.".  
3. The generated slides will be saved automatically under `~/Documents/mulmocast-vision/{date}`  

Currently available features include creating slides for each page, updating specified slides, generating a PDF of all slides, and generating a PDF for specified slides.  
You can instruct these actions via prompts.


## Output Examples

- Proposal (Problem → Solution → Value → Next Action)
- Business Model Canvas
- SWOT, PEST, and 3C Analysis
- Summary, Agenda, and Closing Slides

## Logging

mulmocast-vision automatically logs all operations and errors to help with debugging and monitoring.

### Log Location

Logs are saved in `/tmp/mulmocast-vision-mcp/` with daily rotation:
- Format: `mcp_yyyymmdd.log` (e.g., `mcp_20251206.log`)
- Each day creates a new log file

### What is Logged

- **MCP Server Operations**: Server initialization, tool calls, and results
- **File Operations**: Template reads, HTML/PNG generation, PDF creation
- **Errors**: Detailed error messages with full stack traces
- **Debug Information**: Template rendering, directory operations, and more

### Log Format

Logs are written in JSON Lines format for easy parsing:

```json
{
  "timestamp": "2025-01-15T10:30:45.123Z",
  "level": "ERROR",
  "message": "Template file not found",
  "data": {
    "errorMessage": "getHtml: file /path/to/template.html not exists.",
    "errorName": "Error",
    "stack": "Error: getHtml: file...\n    at htmlPlugin.getHtml...",
    "templateFilePath": "/path/to/template.html",
    "functionName": "createAgendaSlide"
  }
}
```

### Custom Logger

You can replace the default logger with your own implementation (e.g., for telemetry):

```typescript
import { setLogger, LoggerInterface } from 'mulmocast-vision/logger';

class CustomLogger implements LoggerInterface {
  info(message: string, data?: unknown) {
    // Your implementation
  }
  // ... other methods
}

setLogger(new CustomLogger());
```

## For Developers

MulmoCast Vision is open source, so you can apply various designs by modifying the HTML.
For adding styles, please refer to [Style.ja.md](https://github.com/receptron/mulmocast-vision/blob/main/Style.ja.md).

### Official Repository & Package

- [GitHub: receptron/mulmocast-vision](https://github.com/receptron/mulmocast-vision)
- [npm: mulmocast-vision](https://www.npmjs.com/package/mulmocast-vision)

---

# mulmocast-vision（日本語版）

**mulmocast-vision** は、MCP (Model Context Protocol) 経由で LLM を活用し、パワーポイントのようなスライド資料を自動生成できるツールです。
ビジネスに特化した **80種類のスライドテンプレート** を備えており、企画書・提案資料・戦略資料などを簡単に作成できます。

---

## 特徴

- 📑 **豊富なテンプレート**: ビジネスに最適化された 80種類以上のスライドデザイン
- ⚡ **即時生成**: LLM と MCP を通じて、最短数秒でプレゼン資料を出力
- 🖥️ **シンプルな利用方法**: MCP対応ツール（例: Claude Desktop）に設定するだけ
- 📂 **自動保存**: 生成された資料は `~/Documents/mulmocast-vision/` 以下に保存

---

## インストール不要

追加のインストールは不要です。`npx` 経由で直接実行できます。

---

## 設定方法

MCP対応ツール（例: Claude Desktop）の設定ファイルに以下を追記してください。

```json
"mulmocast-vision": {
  "command": "npx",
  "args": [
    "mulmocast-vision"
  ],
  "transport": {
    "stdio": true
  }
}
```

---

## 使い方

1. MCP対応クライアント（Claude Desktop など）を起動
2. `mulmocast-vision` を呼び出してスライド生成を指示
3. 完成した資料が自動的に `~/Documents/mulmocast-vision/` に保存されます

---

## 出力例

- 企画書（Problem → Solution → Value → Next Action）
- ビジネスモデルキャンバス
- SWOT分析、PEST分析、3C分析
- サマリースライド、アジェンダスライド、クロージングスライド

---

## ログ機能

mulmocast-visionは、デバッグや監視を支援するため、すべての操作とエラーを自動的にログに記録します。

### ログの保存場所

ログは `/tmp/mulmocast-vision-mcp/` に日次ローテーションで保存されます：
- 形式: `mcp_yyyymmdd.log` (例: `mcp_20251206.log`)
- 日付が変わると新しいログファイルが作成されます

### 記録される内容

- **MCPサーバー操作**: サーバーの初期化、ツール呼び出し、実行結果
- **ファイル操作**: テンプレート読み込み、HTML/PNG生成、PDF作成
- **エラー**: 詳細なエラーメッセージとスタックトレース
- **デバッグ情報**: テンプレートレンダリング、ディレクトリ操作など

### ログフォーマット

ログはJSON Lines形式で記録され、解析が容易です：

```json
{
  "timestamp": "2025-01-15T10:30:45.123Z",
  "level": "ERROR",
  "message": "Template file not found",
  "data": {
    "errorMessage": "getHtml: file /path/to/template.html not exists.",
    "errorName": "Error",
    "stack": "Error: getHtml: file...\n    at htmlPlugin.getHtml...",
    "templateFilePath": "/path/to/template.html",
    "functionName": "createAgendaSlide"
  }
}
```

### カスタムロガー

デフォルトのロガーを独自の実装（テレメトリーなど）に置き換えることができます：

```typescript
import { setLogger, LoggerInterface } from 'mulmocast-vision/logger';

class CustomLogger implements LoggerInterface {
  info(message: string, data?: unknown) {
    // 独自の実装
  }
  // ... その他のメソッド
}

setLogger(new CustomLogger());
```