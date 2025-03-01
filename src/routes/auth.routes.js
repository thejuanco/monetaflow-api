import { Router } from "express";
import { createdUser } from "../controller/authController.js";

const router = Router();

router.post("/register", createdUser)
router.get("confirm-account")
router.post("/login")
router.post("/recovery-password")
router.route("/recovery-password")

export default router;