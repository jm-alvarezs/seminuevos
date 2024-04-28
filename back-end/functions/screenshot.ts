import { Page } from "puppeteer";

/**
 * Toma una screenshot en la venta actual
 * @param page Instancia de puppeteer
 * @param filePath Ruta para guardar el archivo
 */
const takeScreenshot = async (page: Page, filePath: string) => {    
    await page.screenshot({ path: filePath, type: "png" });
}

export default takeScreenshot;