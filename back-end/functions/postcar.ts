import { ElementHandle, Page } from "puppeteer";
import { handleDropdownSelect, waitFor } from "./dropdown";
import { handleTypeInput } from "./input";
import { CarListing } from "../types";

/**
 * Función para crear un anuncio de un auto en seminuevos.com
 * @param page Instancia de Puppeteer
 * @param car_listing Información completa del auto. Ver types/index.ts
 */
const postCar = async (page: Page, car_listing: CarListing) => {
    const post_link = await page.waitForSelector('a[href="/wizard?f_dealer_id=-1"');
    post_link?.click();    

    await page.waitForNavigation({ waitUntil: "networkidle0" });

    const { car, location } = car_listing;

    //Seguimos el orden del formulario para parecer humano
    await handleDropdownSelect(page, "types", car.types);

    await handleDropdownSelect(page, "brands", car.brands);

    await handleDropdownSelect(page, "models", car.models);

    await handleDropdownSelect(page, "subtypes", car.subtypes);

    await handleDropdownSelect(page, "years", car.year);

    await handleDropdownSelect(page, "provinces", location.provinces);

    await handleDropdownSelect(page, "cities", location.cities);

    await handleTypeInput(page, { selector: "#input_recorrido", value: String(car.mileage) });

    await handleDropdownSelect(page, "mileageType", car.mileageType);
    
    // Pedimos number en car_listing para validar el input, usamos string para capturar
    await handleTypeInput(page, { selector: "#input_precio", value: String(car_listing.price) });

    await handleDropdownSelect(page, "negotiable", car_listing.negotiable);

    const next_button = await page.waitForSelector(".next-button");
    next_button?.click();

    await page.waitForNavigation({ waitUntil: "networkidle0" });

    await handleTypeInput(page, { selector: "#input_text_area_review", value: car_listing.description });

    const input_pictures = await page.waitForSelector("#Uploader") as ElementHandle<HTMLInputElement>;
    input_pictures?.uploadFile(...car_listing.pictures);

    await page.waitForSelector(`.uploaded-list >>> li:nth-child(0n+${car_listing.pictures.length})`);
    await page.waitForFunction(() => !document.querySelector(".next-button.disabled:not(.back)"));
    await waitFor(3000)

    const pictures_next_button = await page.waitForSelector(".next-button:not(.back)");
    pictures_next_button?.click();

    await page.waitForNavigation({ waitUntil: "load" });

    const page_url = page.url().replace("/plans", "");
    
    await page.goto(page_url);
    
    await page.waitForFunction(() => !document.querySelector(".loading-img"), { timeout: 10000 });
    await page.waitForSelector('h2 ::-p-text("Acura ILX (2018)")');
}

export default postCar;