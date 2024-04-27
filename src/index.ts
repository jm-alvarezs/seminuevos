import { car_listing } from "./forms/car";
import { login_form } from "./forms/login";
import { waitForLogin, waitForPostCar } from "./functions";

const puppeteer = require("puppeteer");

const main = async () => {
  const browser = await puppeteer.launch({ headless: false });
  try {
    const page = await browser.newPage();
    await page.goto("https://www.seminuevos.com");
    // El botón aparece diferente para móviles
    await page.setViewport({
      width: 1920,
      height: 1080,
      deviceScaleFactor: 1,
    });
    
    await waitForLogin(page, login_form);

    await waitForPostCar(page, car_listing);

} catch (error) {
    console.log("Error:");
    console.log(error);
  }

  //browser.close();
};

main();
