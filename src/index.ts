import { car_listing } from "./data/car";
import { login_form } from "./data/login";
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

    const current_listing = {
      ...car_listing,
      pictures: [`${__dirname}/data/frente.jpg`, `${__dirname}/data/atras.jpg`, `${__dirname}/data/perfil.jpg`],
    }

    await waitForPostCar(page, current_listing);

} catch (error) {
    console.log("Error:");
    console.log(error);
  }

  //browser.close();
};

main();
