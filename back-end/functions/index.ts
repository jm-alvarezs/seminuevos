import login from "./login";
import postcar from "./postcar";
import puppeteer from "puppeteer";

export const waitForLogin = login;
export const waitForPostCar = postcar;

export const setupScraper = async (start_url: string) => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto(start_url);
    
    // El botón aparece diferente para móviles
    await page.setViewport({
      width: 1920,
      height: 1080,
      deviceScaleFactor: 1,
    });

    return page;
}

