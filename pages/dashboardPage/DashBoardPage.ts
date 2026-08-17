import { Locator, Page } from "@playwright/test";

export class DashBoardPage {
  readonly page: Page;
  

  constructor(page: Page) {
    this.page = page;
  }
}