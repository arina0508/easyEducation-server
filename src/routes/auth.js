import express from "express"
import { getMe, login } from "../controllers/auth.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/login", login);
router.get("/me", verifyToken, getMe);

export default router