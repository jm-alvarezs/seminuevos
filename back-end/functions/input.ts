import { Page } from "puppeteer";
import { ScrapeFormElement } from "../types";

/**
 * 
 * @param page Instancia de puppeteer
 * @param input Objecto con "selector" y "value". Ver types/index.ts
 */
export const handleTypeInput = async (page: Page, input: ScrapeFormElement) => {
  await page.waitForSelector(input.selector);
  await page.type(input.selector, input.value, { delay: 100 });
};
