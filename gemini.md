# Playwright Orange Project (TypeScript)

This project is dedicated to mastering Playwright with TypeScript and AI agent orchestration.

## Project Mandates
- **Language:** TypeScript
- **Pattern:** Page Object Model (POM)
- **Tools:** Playwright Test Runner, MCP for Agentic Automation
- **Results:** All test reports are stored in the `reports/` directory.

## MCP Server Setup
To allow AI agents (like Gemini CLI or Claude) to use this project's Playwright capabilities:

1. **Add to Gemini CLI:**
   ```bash
   gemini mcp add playwright npx -y @playwright/mcp@latest
   ```

2. **Add to Claude Desktop:**
   Edit your `claude_desktop_config.json` with:
   ```json
   {
     "mcpServers": {
       "playwright": {
         "command": "npx",
         "args": ["-y", "@playwright/mcp@latest"]
       }
     }
   }
   ```

3. **Verify Connection:**
   Type `/mcp list` or `/mcp refresh` in your CLI to confirm the `playwright_*` tools are available.
