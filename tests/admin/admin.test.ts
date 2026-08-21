// import { test, expect } from "@playwright/test";
// import { config } from "../../testConfig";
// import { LoginPage } from "../../pages/loginPage/loginPage";
// import { AdminPage } from "../../pages/adminPage/adminPage";    

// test.describe("Admin Page Tests", () => {
//   test.beforeEach(async ({ page }) => {
//     await page.goto(config.env.baseUrl);
//   });

//   test("Search an Admin User", async ({ page }) => {
//     const loginpage = new LoginPage(page);
//     const adminpage = new AdminPage(page);
//     loginpage.login(config.env.username, config.env.password);
//     adminpage.searchUser("Admin","Admin","Enabled");  
// })
// });

import { test, expect } from "@playwright/test";
import { config } from "../../testConfig";
import { LoginPage } from "../../pages/loginPage/loginPage";
import { AdminPage } from "../../pages/adminPage/adminPage";    

test.describe("Admin Page Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(config.env.baseUrl, { waitUntil: "domcontentloaded" });
    await expect(page.getByRole("textbox", { name: "Username" })).toBeVisible();
  });

  test("Search an Admin User", async ({ page }) => {
    const loginpage = new LoginPage(page);
    const adminpage = new AdminPage(page);
    
    // Added 'await' here
    await loginpage.login(config.env.username, config.env.password);
    
    // Added 'await' here as well
    await adminpage.searchUser("Admin", "Admin", "Enabled");  
    await expect(page.getByRole("row").filter({ hasText: "Admin" }).first()).toBeVisible();
  });
});