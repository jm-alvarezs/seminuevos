import { NextFunction, Request, Response } from "express";
import { setupScraper, waitForLogin, waitForPostCar, waitForScreenshot } from "../functions";
import { login_form } from "../data/login";
import { car_listing } from "../data/car";
import moment from "moment";
import path from "path";

export const postCar = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body;
    // Usamos ipnut del usuario
    car_listing.price = data.price;
    car_listing.description = data.description;
    const page = await setupScraper("https://www.seminuevos.com");
    await waitForLogin(page, login_form);
    await waitForPostCar(page, car_listing);
    const currentMoment = moment().format("YYYY_MM_DD_HH_mm_ss");
    const fileName = `screenshot_${currentMoment}.png`    
    const filePath = path.join(__dirname, "..", "files", fileName);
    await waitForScreenshot(page, filePath);
    const file_url = `http://localhost:4000/files/${fileName}`;
    res.status(200).send({ file_url });
  } catch (error) {
    next(error);
  }
};
