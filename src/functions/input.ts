import { Page } from "puppeteer";
import { ScrapeFormElement } from "../types";

export const handleTypeInput = async (page: Page, input: ScrapeFormElement) => {
  await page.waitForSelector(input.selector);
  await page.type(input.selector, input.value, { delay: 100 });
};
