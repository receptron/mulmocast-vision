# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Presentation slide generator for MulmoCast. Generates stylish HTML/image slides from MulmoScript definitions using browser-based rendering.

## Commands

```bash
yarn build      # Compile TypeScript (tsc)
yarn lint       # Run ESLint on src/ and tests/
yarn format     # Format with Prettier
yarn test       # Run tests (node:test with ts-node)
```

## Architecture

- `src/index.ts` - Main entry point
- `src/browser.ts` - Browser-based rendering (Puppeteer)
- `src/html_class.ts` - HTML generation classes
- `src/mcp.ts` - MCP server integration
- `src/tools/` - Tool implementations
- `src/commons.ts` - Shared utilities
- `tests/` - Test files (test_*.ts pattern)
- Uses cross-env for environment variable management
