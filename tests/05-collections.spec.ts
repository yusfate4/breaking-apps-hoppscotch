import { test, expect } from "@playwright/test";
import { runSteps } from "passmark";

test("Open the Collections panel", async ({ page }) => {
  test.setTimeout(120_000);
  await runSteps({
    page,
    userFlow: "Open the Collections sidebar in Hoppscotch",
    steps: [
      { description: "Navigate to https://hoppscotch.io" },
      {
        description: "On the right side of the screen, click the button labeled Collections",
      },
    ],
    assertions: [
      { assertion: "The Collections panel is visible showing Personal Workspace" },
    ],
    test,
    expect,
  });
});

test("Create a new collection", async ({ page }) => {
  test.setTimeout(120_000);
  await runSteps({
    page,
    userFlow: "Create a new request collection in Hoppscotch",
    steps: [
      { description: "Navigate to https://hoppscotch.io" },
      { description: "Click the button labeled New in the Collections panel on the right side" },
      {
        description: "Enter a name for the collection",
        data: { value: "Hackathon Suite" },
      },
      { description: "Confirm and save the collection" },
    ],
    assertions: [
      { assertion: "A collection named Hackathon Suite appears in the list" },
    ],
    test,
    expect,
  });
});
