import { getFile } from "../controllers/files";
import { Router } from "express"
const router = Router();

router.get("/:fileName", getFile);

export default router;