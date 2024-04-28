import { Page } from "puppeteer";
import { ScrapeForm } from "../types";
import { handleTypeInput } from "./input";

/**
 * Función para iniciar sesión en seminuevos.com
 * @param page Instancia de puppeteer
 * @param form Objeto con propiedades para login. Ver tyeps/index.ts
 */
const login = async (page: Page, form: ScrapeForm) => {
  const link = await page.waitForSelector("a.login-btn");
  link?.click();
  await page.waitForNavigation({ waitUntil: "load" });

  const { inputs, submit } = form;

  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    await handleTypeInput(page, input);
  }

  const submit_element = await page.waitForSelector(submit.selector);
  submit_element?.click();
  
  await page.waitForNavigation({ waitUntil: "networkidle0" });
};

export default login;
