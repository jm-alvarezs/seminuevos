import { car_listing } from "./data/car";
import { login_form } from "./data/login";
import { setupScraper, waitForLogin, waitForPostCar } from "./functions";

const puppeteer = require("puppeteer");

const main = async () => {
  try {
    
    const page = await setupScraper("https://www.seminuevos.com");

    await waitForLogin(page, login_form);

    await page.screenshot({ path: `${__dirname}/data/screenshot_${new Date().toISOString()}.png`, type: "png" });
  
} catch (error) {
    console.log("Error:");
    console.log(error);
  }

  //browser.close();
};

main();
