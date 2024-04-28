import { postCar } from "../controllers/cars";
import { Router } from "express";
const router = Router();

router.post("/", postCar);

export default router;
