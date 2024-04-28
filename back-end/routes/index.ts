import express, { Express } from "express";
const router = express.Router();
import cars from "./cars";

export const applyRoutes = (base_url: string, app: Express) => {
    router.use("/cars", cars);
    app.use(base_url, router);
}