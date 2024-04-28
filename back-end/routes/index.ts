import { Express, Router } from "express";
import cars from "./cars";

const router = Router();

const applyRoutes = (base_url: string, app: Express) => {
    router.use("/cars", cars);
    app.use(base_url, router);
}

export default applyRoutes;