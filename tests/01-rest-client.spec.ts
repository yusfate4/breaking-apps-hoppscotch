import { test, expect } from "@playwright/test";
import { runSteps } from "passmark";

test("Send a GET request and see the response", async ({ page }) => {
  test.setTimeout(120_000);
  await runSteps({
    page,
    userFlow: "Send a GET request using Hoppscotch REST client",
    steps: [
      { description: "Navigate to https://hoppscotch.io" },
      {
        description: "Click the URL input bar and clear it, then type a new URL",
        data: { value: "https://jsonplaceholder.typicode.com/posts/1" },
      },
      { description: "Click the Send button" },
    ],
    assertions: [
      { assertion: "A response panel shows Status 200 and JSON data" },
    ],
    test,
    expect,
  });
});
