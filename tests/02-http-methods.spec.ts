import { test, expect } from "@playwright/test";
import { runSteps } from "passmark";

test("Switch HTTP method to POST", async ({ page }) => {
  test.setTimeout(120_000);
  await runSteps({
    page,
    userFlow: "Change the HTTP method from GET to POST in Hoppscotch",
    steps: [
      { description: "Navigate to https://hoppscotch.io" },
      { description: "Wait for the page to fully load and the REST client to be visible" },
      { description: "Find the button or dropdown near the URL bar that currently shows the text GET" },
      { description: "Click that GET button to open the method dropdown" },
      { description: "Click POST from the list of HTTP methods that appears" },
    ],
    assertions: [
      { assertion: "The method button near the URL bar now shows POST instead of GET" },
    ],
    test,
    expect,
  });
});

test("Add a JSON request body to a POST request", async ({ page }) => {
  test.setTimeout(120_000);
  await runSteps({
    page,
    userFlow: "Set POST method and add a JSON body in Hoppscotch REST client",
    steps: [
      { description: "Navigate to https://hoppscotch.io" },
      { description: "Wait for the REST client to load" },
      { description: "Click the GET dropdown button near the URL bar and select POST" },
      { description: "Click the tab labeled Body underneath the URL input" },
      { description: "Look for a content-type selector and choose application/json" },
    ],
    assertions: [
      { assertion: "The Body tab is active and a text area or editor for JSON input is visible" },
    ],
    test,
    expect,
  });
});
