import { Locator, Page } from "@playwright/test";

export class ProductPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Page elements
  get productTitle(): Locator {
    return this.page.locator("h3");
  }
}