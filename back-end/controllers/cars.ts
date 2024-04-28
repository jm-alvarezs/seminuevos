import { NextFunction, Request, Response } from "express";
import { setupScraper, waitForLogin, waitForPostCar, waitForScreenshot } from "../functions";
import { login_form } from "../data/login";
import { car_listing } from "../data/car";

export const postCar = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body;
    const page = await setupScraper("https://www.seminuevos.com");
    await waitForLogin(page, login_form);
    await waitForPostCar(page, car_listing);
    const fileName = `screenshot_${new Date().toISOString()}.png`    
    const filePath = `${__dirname}/files/${fileName}`;
    await waitForScreenshot(page, filePath);
    const file_url = `http://localhost:4000/files/${fileName}`;
    res.status(200).send({ file_url });
  } catch (error) {
    next(error);
  }
};
