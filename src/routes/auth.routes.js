import { Router } from "express";
import { registerUser } from "../controller/authController.js";

const router = Router();

router.post("/register", registerUser)
router.get("confirm-account")
router.post("/login")
router.post("/recovery-password")
router.route("/recovery-password")

export default router;