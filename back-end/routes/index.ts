import express, { Express } from "express";
const router = express.Router();

const applyRoutes = (base_url: string, app: Express) => {
    
    app.use(base_url, router);
}