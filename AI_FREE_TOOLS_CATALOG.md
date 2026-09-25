# AI_FREE_TOOLS_CATALOG.md

## Purpose

This is the reusable free-tool and AI-agent registry for this project family.

**Global rule:** Before integrating any tool, agent, API, service, MCP server, framework, library, browser automation layer, deployment service, or other capability, search this catalog first. Prefer free/open-source/self-hosted options. If an option requires an account, API key, permission, connector, or other access, ask the user for that access rather than bypassing it.

## Important definition of "free"

Entries are classified as:
- **OSS/self-hosted** — software is free to use; local compute/hosting may still have infrastructure costs.
- **Keyless/hosted free** — usable without a paid account/key, subject to the provider's current limits.
- **Free tier** — usable at no charge within stated limits.
- **Verify** — source lists it as free/open-source, but current limits/licensing should be checked before integration.

Never treat a free tier as unlimited.

## Live discovery sources

These catalogs are dynamic and should be searched whenever a needed capability is not already covered here:

1. MCP.Directory — current directory reports 2,303 MCP servers and 9,291 skills.
2. MCP.Directory Free & Open Source — current directory reports 2,303 free/open-source MCP servers.
3. FindMCP — current directory reports 8,000+ MCP servers and 50+ categories.
4. BotMarket — current directory indexes 1,800+ MCP/agent/protocol records and exposes an MCP endpoint.
5. DeepYard — current directory reports 535 agents, MCP servers, skills, frameworks and developer tools.
6. 100Ideas AI — current directory reports 416 open-source AI tools, including 277 MCP servers.
7. Awesome AI Devtools — open-source ecosystem map with hundreds of reviewed/draft tools.
8. Best-of-Agent-Harnesses — curated open-source agent harness catalog.

These counts change frequently. Do not assume this file is an exhaustive snapshot; use the live registries for discovery.

## Core free/open-source agents and agent platforms

### General / autonomous agents
- OpenClaw — open-source personal AI agent platform; self-hostable.
- Hermes Agent — MIT-licensed self-improving AI agent; Python/Node/Docker ecosystem.
- OpenCode — open-source terminal coding agent; multi-provider, MCP/plugin support.
- Gemini CLI — Google's open-source terminal agent; MCP/plugin support.
- Atomic Agent — local-first CLI/TUI coding agent; open-weight/local model support and MCP.
- PraisonAI — open-source autonomous multi-agent teams.
- OpenAgents — open-source autonomous-agent platform/workflows.
- GPT Researcher — open-source autonomous deep-research agent.
- Dify — open-source self-hostable LLM/agent/RAG platform.
- AnythingLLM — self-hosted RAG and agent platform.
- Open WebUI — self-hosted AI platform with Ollama/OpenAI-compatible providers and tools.
- Onyx — self-hostable AI platform with agents, RAG and MCP.
- Tabby — self-hosted AI coding assistant.

### Agent frameworks / orchestration
- LangChain
- LangGraph
- CrewAI
- AutoGen
- OpenAI Agents SDK
- Claude Agent SDK
- MCP SDKs / official MCP tooling
- A2A-compatible agent tooling

## Core free MCP servers / integrations

### Files and local computer
- Filesystem MCP — controlled local filesystem access.
- Fetch MCP — HTTP/public web retrieval.
- GitHub MCP Server — repositories, issues, pull requests and code workflows.
- PostgreSQL MCP — database inspection/querying.
- SQLite MCP implementations — local database workflows.
- Memory MCP implementations — persistent agent context.
- Sequential Thinking MCP — structured reasoning workflow.
- Everything/desktop filesystem MCP variants — local file discovery where appropriate.

### Browser / web automation
- Playwright MCP — browser automation and testing.
- Chrome DevTools MCP — live Chrome debugging, performance and network inspection.
- Puppeteer MCP — browser automation.
- Browser Use — AI browser interaction/scraping.
- Browser MCP — local browser control.
- Firecrawl — web extraction/scraping; self-host/open-source components.
- Browserbase MCP — browser automation server; verify hosted limits before use.

### Developer / code
- GitHub MCP Server
- GitLab MCP implementations
- Context7 — current library/API documentation context.
- Code search MCP implementations.
- Sentry MCP implementations.
- CI/CD and deployment MCP implementations.
- Docker MCP implementations.

### Databases / backend
- PostgreSQL MCP
- SQLite MCP
- Supabase MCP Server
- MySQL MCP implementations
- MongoDB MCP implementations
- Redis MCP implementations
- Local vector database integrations
- Qdrant
- Chroma
- pgvector

### Productivity / communication
- Slack MCP
- Google Drive MCP
- Google Workspace MCP implementations
- Notion MCP
- Linear MCP
- Jira/Confluence MCP
- Monday.com MCP
- Trello MCP
- Todoist MCP
- Calendar MCP implementations

Account/API access may be required for these services even when the MCP software itself is free.

### Research / knowledge
- arXiv MCP
- Wikipedia MCP implementations
- Search/web retrieval MCP implementations
- GPT Researcher
- Context7
- Local RAG stacks using Open WebUI, AnythingLLM, Dify or Onyx

### Observability / testing
- Playwright
- Chrome DevTools
- Sentry MCP implementations
- PostHog MCP
- OpenTelemetry tooling
- k6
- Lighthouse
- Vitest
- Jest
- pytest

## Free/self-hostable AI infrastructure

- Ollama — local model runtime.
- llama.cpp — local inference/runtime.
- vLLM — open-source inference server.
- LocalAI — OpenAI-compatible local AI server.
- LM Studio — local model runtime with free desktop usage.
- Open WebUI — local AI interface.
- AnythingLLM — local/self-hosted RAG.
- Dify — self-hosted AI application platform.
- Onyx — self-hosted AI/search platform.
- Qdrant — open-source vector database.
- Chroma — open-source vector database.
- pgvector — PostgreSQL vector extension.
- Redis — open-source data store with agent/vector use cases.
- Docker — container runtime.
- Podman — open-source container runtime.

## Free developer / coding agents and tools

- OpenCode
- Gemini CLI
- Atomic Agent
- Aider
- Continue
- Cline
- Roo Code
- OpenHands
- SWE-agent
- GPT Researcher
- Tabby
- Ollama
- llama.cpp
- Context7
- Playwright
- GitHub MCP

Verify each project's current license and model/provider requirements before use.

## Free web / browser tooling

- Playwright
- Puppeteer
- Browser Use
- Chrome DevTools Protocol
- Chrome DevTools MCP
- Firecrawl open-source/self-host components
- Fetch MCP
- Browser MCP
- Selenium
- Crawlee

## Free testing / QA tooling

- Playwright
- Puppeteer
- Selenium
- Vitest
- Jest
- pytest
- Cypress
- k6
- Lighthouse
- axe-core
- WebdriverIO

## Free design / UI development tooling

- Figma free capabilities where sufficient
- Penpot — open-source design platform
- Storybook
- Tailwind CSS
- shadcn/ui
- Radix UI
- Material UI
- Bootstrap
- Three.js
- React
- Next.js
- Vite

Paid hosted limits must not be confused with the open-source software itself.

## Free deployment / hosting candidates

Evaluate free/current limits before selecting:
- GitHub Pages
- Cloudflare Pages
- Cloudflare Workers free tier
- Vercel free tier
- Netlify free tier
- Railway free/trial availability — verify current terms
- Render free availability — verify current terms
- GitHub Actions free allowances
- Supabase free tier
- Firebase free tier
- Fly.io availability/terms — verify current terms

Prefer the option that satisfies the project without introducing avoidable paid usage.

## Free/open-source media and utility tooling

- FFmpeg
- ImageMagick
- Sharp
- Pillow
- OpenCV
- Whisper/open-source speech-to-text implementations
- Piper/open-source TTS
- Coqui TTS projects where maintained/compatible
- Stable Diffusion / open image-generation implementations
- ComfyUI
- Blender
- OBS Studio
- Audacity

Model downloads, GPU compute, hosted APIs and commercial licenses may have separate costs.

## Free model/provider candidates

Always verify current availability and rate limits before use:
- Ollama local models
- llama.cpp-compatible models
- Hugging Face open models
- OpenRouter free-model routing where currently offered
- Gemini free-tier offerings where currently offered
- Other provider free tiers discovered during the task

Do not hard-code a provider solely because it appears here. Re-check availability and cost at integration time.

## Project integration matrix

### FactoryMind / FactoryMind-Web
Prioritize:
1. GitHub MCP
2. Context7
3. Playwright
4. Chrome DevTools MCP
5. Supabase MCP
6. Filesystem MCP
7. OpenCode / Gemini CLI / local agents
8. Free deployment options
9. Free testing and QA tools

### Cholyx Autopilot
Prioritize:
1. GitHub MCP
2. Browser automation
3. Filesystem MCP
4. Playwright
5. Ollama/local models
6. OpenRouter free models when appropriate
7. FFmpeg/Open-source media tooling
8. Free deployment/cron options

### Cholyx Auto Reply Android
Prioritize:
1. Android SDK / Gradle
2. ADB
3. GitHub MCP
4. Android Accessibility APIs
5. Local testing/emulators
6. Open-source Android libraries
7. Playwright/browser QA where applicable

### JARVIS
Prioritize:
1. OpenClaw
2. Ollama
3. llama.cpp
4. Hermes Agent
5. OpenCode/Gemini CLI
6. Filesystem MCP
7. Browser automation
8. GitHub MCP
9. local speech-to-text/TTS
10. local computer-control tools

## Integration decision procedure

When a task needs a new capability:

1. Search this catalog.
2. Search the live MCP/agent directories above.
3. Search the relevant official/open-source repository.
4. Check whether an already-connected tool can do the job for free.
5. Prefer local/self-hosted OSS when practical.
6. Check license, API-key requirement, free-tier limits, maintenance status and security.
7. Ask the user for any missing permission/account/credential.
8. Integrate the least-cost option that actually satisfies the task.
9. Test the integration for real.
10. Record newly discovered useful free tools back into this catalog.

## Security rule

Never install or connect a tool merely because it is listed as free. Before use, inspect its repository/source, permissions, requested credentials, network access, data handling and maintenance status. Never expose secrets in source files.

## Source snapshot (2026-09-25)

- MCP.Directory: 2,303 MCP servers / 9,291 skills reported.
- MCP.Directory Free & Open Source: 2,303 free/open-source MCP servers reported.
- FindMCP: 8,000+ MCP servers reported.
- BotMarket: 1,800+ MCP/agent/protocol records reported.
- DeepYard: 535 agents/MCP/skills/frameworks/developer tools reported.
- 100Ideas AI: 416 open-source AI tools / 277 MCP servers reported.
- Awesome AI Devtools: 371 listed tools, with 287 reviewed and 84 draft entries at the time checked.

This registry is intentionally a reusable discovery index rather than a frozen claim that every free tool in existence is permanently listed. The live directories above must be consulted whenever a new integration is needed.
