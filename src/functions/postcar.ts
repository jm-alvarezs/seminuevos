import { Page } from "puppeteer";
import { handleDropdownSelect } from "./dropdown";
import { CarListing } from "../types";
import { handleTypeInput } from "./input";

const postcar = async (page: Page, car_listing: CarListing) => {
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

    await handleTypeInput(page, { selector: "#input_teléfono", value: car_listing.phone });
    

    await handleDropdownSelect(page, "negotiable", car_listing.negotiable);

    // Pedimos number en car_listing para validar el input, usamos string para capturar
    await handleTypeInput(page, { selector: "#input_precio", value: String(car_listing.price) });

    const next_button = await page.waitForSelector(".next-button");
    next_button?.click();
}

export default postcar;