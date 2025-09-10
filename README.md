# mulmocast-vision  

**mulmocast-vision** is a tool that uses LLMs via MCP (Model Context Protocol) to automatically generate presentation slides, similar to PowerPoint.  
With **80+ business-oriented slide templates**, you can quickly create proposals, strategy decks, and other professional materials.  

---

## Features  

- 📑 **Rich Templates**: Over 80 business-optimized slide designs  
- ⚡ **Instant Generation**: Create slides in seconds using LLMs via MCP  
- 🖥️ **Simple Setup**: Just add a small config to your MCP client (e.g., Claude Desktop)  
- 📂 **Auto Save**: Output files are saved under `~/Documents/mulmocast-vision/`  

---

## No Installation Needed  

Runs directly with `npx`. No global install required.  

---

## Configuration

Add the following to your MCP client settings (e.g., Claude Desktop):  

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

## Usage  

1. Launch an MCP-compatible client (e.g., Claude Desktop)  
2. Call `mulmocast-vision` to request slide generation  
3. The generated slides will be saved automatically under `~/Documents/mulmocast-vision/`  

---

## Output Examples

- Proposal (Problem → Solution → Value → Next Action)
- Business Model Canvas
- SWOT, PEST, and 3C Analysis
- Summary, Agenda, and Closing Slides

---

# mulmocast-vision（日本語版）

**mulmocast-vision** は、MCP (Model Context Protocol) 経由で LLM を活用し、パワーポイントのようなスライド資料を自動生成できるツールです。
ビジネスに特化した **80種類以上のスライドテンプレート** を備えており、企画書・提案資料・戦略資料などを簡単に作成できます。

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

