import { test, expect } from "@playwright/test";
import { runSteps } from "passmark";

test("Navigate to GraphQL client", async ({ page }) => {
  test.setTimeout(120_000);
  await runSteps({
    page,
    userFlow: "Open the GraphQL section of Hoppscotch",
    steps: [
      { description: "Navigate to https://hoppscotch.io" },
      { description: "Click on GraphQL in the left sidebar" },
    ],
    assertions: [
      { assertion: "The GraphQL editor is visible with a URL input field" },
    ],
    test,
    expect,
  });
});

test("Enter a GraphQL endpoint URL", async ({ page }) => {
  test.setTimeout(120_000);
  await runSteps({
    page,
    userFlow: "Set a GraphQL API endpoint",
    steps: [
      { description: "Navigate to https://hoppscotch.io" },
      { description: "Click on GraphQL in the left sidebar" },
      {
        description: "Click the URL input field and type an endpoint",
        data: { value: "https://countries.trevorblades.com" },
      },
    ],
    assertions: [
      { assertion: "The URL field contains the entered GraphQL endpoint" },
    ],
    test,
    expect,
  });
});
