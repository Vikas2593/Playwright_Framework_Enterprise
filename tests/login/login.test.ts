import { test, expect } from "@playwright/test";
import { config } from "../../testConfig";
import { LoginPage } from "../../pages/loginPage/loginPage";

test.describe("Login Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(config.env.baseUrl);
  });

  test("User can login successfully", async ({ page }) => {
    const loginpage = new LoginPage(page);
    loginpage.login(config.env.username, config.env.password);
    await expect(page.locator(".title")).toHaveText("Products");
  });

  test("User can login with invalid credentials", async ({ page }) => {
    const loginpage = new LoginPage(page);
    loginpage.login("invalid_user", "invalid_user");
    await page.waitForSelector("h3");
    await expect(page.locator("h3")).toContainText("Username");
  });
});