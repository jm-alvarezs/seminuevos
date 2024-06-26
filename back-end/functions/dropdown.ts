import { Page } from "puppeteer";

export const waitFor = (timeout: number) =>
  new Promise((resolve, reject) => setTimeout(resolve, timeout));

/**
 * 
 * @param page Instancia de puppeteer
 * @param option Nombre del elemento del form
 * @param value Valor a seleccionar
 */
export const handleDropdownSelect = async (
  page: Page,
  option: string,
  value: string
) => {
  await waitFor(3000);
  const dropdown_button = await page.waitForSelector(
    `a[data-activates="dropdown_${option}"]`,
    { visible: true }
  );
  dropdown_button?.click();

  await waitFor(1000);
  const option_button = await page.waitForSelector(
    `#dropdown_${option} >>> li[data-content="${value}"] >>> a`
  );
  option_button?.click();
};
