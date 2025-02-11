import { Router } from "express";
import { signIn, signOut } from "../controllers/auth.controller.js";

const router = Router()

router.post("/signIn", signIn)
router.post("/signOut", signOut)

export default router