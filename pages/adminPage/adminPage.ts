import { Locator, Page } from "@playwright/test";

export class AdminPage {
  readonly page: Page;
  readonly username: Locator;
  readonly userRole: Locator;
  readonly userRoleDropdown: Locator;
  readonly statusDropdown: Locator;
  readonly status: Locator;
  readonly searchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.getByRole('textbox').nth(1)
    this.userRole = page.locator('div').filter({ hasText: /^-- Select --$/ }).nth(2)
    this.userRoleDropdown = page.getByRole('option', { name: 'Admin' })
    this.statusDropdown = page.getByRole('listbox').getByText('Enabled');
    this.status =  page.locator('div').filter({ hasText: /^--Select --$/ }).nth(2)
    this.searchButton = page.getByRole('button', { name: 'Search' })
  }

  // Actions
  async searchUser(username: string, userRole: string, status: string): Promise<void> {
    await this.username.fill(username);
    await this.userRole.click();
    await this.userRoleDropdown.click();
    await this.status.click();
    await this.statusDropdown.click();
    await this.status
  }
}

