import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  reporter: [
    ["list"], 
    ["json", { outputFile: "results.json" }],
    ["html", { outputFile: "reports/html/report.html"}]],
  outputDir: "results",
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: "on-first-failure",
    screenshot: "on-first-failure"
  },
  projects: [
    {
      name: "chromium",
      use: { browserName: "chromium" }
    }
  ],
  webServer: {
    command: "npx playwright --ui",
    url: "https://opensource-demo.orangehrmlive.com",
    reuseExistingServer:true
  }
});
