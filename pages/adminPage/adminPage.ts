import { Locator, Page } from "@playwright/test";

export class AdminPage {
  readonly page: Page;
  readonly username: Locator;
  readonly searchButton: Locator;
  readonly adminTab: Locator;
  readonly userRole: Locator;
  readonly status: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.locator('.oxd-input-group').filter({ hasText: 'Username' }).getByRole('textbox');
    this.searchButton = page.getByRole('button', { name: 'Search' });
    this.adminTab = page.getByRole('link', { name: 'Admin', exact: true });
    this.userRole = page.locator('.oxd-input-group').filter({ hasText: 'User Role' }).locator('.oxd-select-text');
    this.status = page.locator('.oxd-input-group').filter({ hasText: 'Status' }).locator('.oxd-select-text');
  }

  async searchUser(username: string, userRole: string, status: string): Promise<void> {
    await this.adminTab.click();
    await this.username.fill(username);
    await this.userRole.click();
    await this.page.getByRole('option', { name: userRole, exact: true }).click();
    await this.status.click();
    await this.page.getByRole('option', { name: status, exact: true }).click();
    await this.searchButton.click();
  }
}
