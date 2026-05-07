# Breaking Apps Hackathon — Passmark Test Suite for Hoppscotch

A Passmark AI-powered test suite for [Hoppscotch](https://hoppscotch.io), built for the [Breaking Apps Hackathon](https://hashnode.com/hackathons/breaking-things) by Bug0.

## What is Passmark?
Passmark lets you write Playwright tests in plain English — no selectors, no page objects. Just describe what a user does and what you expect.

## Test Coverage

| File | Tests | What it covers |
|---|---|---|
| 01-rest-client.spec.ts | 1 | Send a GET request and verify JSON response |
| 02-http-methods.spec.ts | 2 | Switch HTTP method to POST, add JSON body |
| 03-headers-params.spec.ts | 2 | Add custom headers, add query parameters |
| 04-graphql.spec.ts | 2 | Navigate to GraphQL client, set endpoint URL |
| 05-collections.spec.ts | 2 | Open collections panel, create a new collection |

**Total: 9 tests across 5 files — all passing ✅**

## How to Run

```bash
git clone https://github.com/YOUR_USERNAME/breaking-apps-hoppscotch
cd breaking-apps-hoppscotch
npm install
cp .env.example .env
# Add your OpenRouter API key to .env
npx playwright test --project chromium
npx playwright show-report
```

## Tech Stack
- [Passmark](https://github.com/bug0inc/passmark) — AI testing library
- [Playwright](https://playwright.dev) — browser automation
- [OpenRouter](https://openrouter.ai) — AI gateway
- [Hoppscotch](https://hoppscotch.io) — target app under test
