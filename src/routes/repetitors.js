import express from "express";
import { getRepetitors, signUpToRepetitor } from "../controllers/repetitors.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getRepetitors);
router.post("/:id/signup", verifyToken, signUpToRepetitor);

export default router;
