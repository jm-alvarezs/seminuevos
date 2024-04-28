import express from "express";
import { postCar } from "../controllers/cars";
const router = express.Router();

router.post("/", postCar);

export default router;