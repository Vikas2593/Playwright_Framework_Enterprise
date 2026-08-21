import { test, expect } from "@playwright/test";
import { config } from "../../testConfig";
import { LoginPage } from "../../pages/loginPage/loginPage";

test.describe("Login Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(config.env.baseUrl, { waitUntil: "domcontentloaded" });
    await expect(page.getByRole("textbox", { name: "Username" })).toBeVisible();
  });

  test("User can login successfully", async ({ page }) => {
    const loginpage = new LoginPage(page);
    await loginpage.login(config.env.username, config.env.password);
    await expect(page.locator("h6")).toHaveText("Dashboard");
  });

  test("User can login with invalid credentials", async ({ page }) => {
    const loginpage = new LoginPage(page);
    await loginpage.login("invalid_user", "invalid_user");
    await expect(page.getByRole('alert')).toBeVisible();
    await expect(page.getByRole("alert")).toHaveText("Invalid credentials");
  });
});