import { Express, Router } from "express";
import files from "./files";
import cars from "./cars";

const router = Router();

const applyRoutes = (base_url: string, app: Express) => {
    router.use("/files", files);
    router.use("/cars", cars);
    app.use(base_url, router);
}

export default applyRoutes;