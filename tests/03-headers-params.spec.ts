import { test, expect } from "@playwright/test";
import { runSteps } from "passmark";

test("Add a custom request header", async ({ page }) => {
  test.setTimeout(120_000);
  await runSteps({
    page,
    userFlow: "Navigate to the Headers section of the Hoppscotch REST client",
    steps: [
      { description: "Navigate to https://hoppscotch.io" },
      { description: "Wait for the page to fully load" },
      {
        description: "Look at the row of tabs below the URL bar — you should see tabs like Params, Headers, Body, Auth. Click the one that says Headers",
      },
      {
        description: "Once the Headers tab content is visible, look for an Add button or a plus icon to add a new header entry and click it",
      },
    ],
    assertions: [
      { assertion: "The Headers tab panel is open and at least one empty header input row is visible" },
    ],
    test,
    expect,
  });
});

test("Add query parameters to a REST request", async ({ page }) => {
  test.setTimeout(120_000);
  await runSteps({
    page,
    userFlow: "Add a query parameter in Hoppscotch REST client",
    steps: [
      { description: "Navigate to https://hoppscotch.io" },
      { description: "Wait for the page to fully load" },
      {
        description: "Look at the row of tabs below the URL bar — click the tab that says Params",
      },
      {
        description: "Once the Params tab is open, look for an Add button or plus icon and click it to add a new parameter row",
      },
    ],
    assertions: [
      { assertion: "The Params tab panel is open and at least one empty parameter input row is visible" },
    ],
    test,
    expect,
  });
});
