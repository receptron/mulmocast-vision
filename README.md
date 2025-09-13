# mulmocast-vision  

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

