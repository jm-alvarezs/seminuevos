import { NextFunction, Request, Response } from "express";
import path from "path";
import fs from "fs";

export const getFile = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const fileName = req.params
    const filePath = path.join(__dirname, "..", `files/${fileName}`);
    const fileExists = fs.existsSync(filePath);
    if (!fileExists) {
      return res.sendStatus(404);
    }
    res.status(200).sendFile(filePath);
  } catch (error) {
    next(error);
  }
};
