import { Router } from "express";
import { createdUser, confirmAccount } from "../controller/authController.js";

const router = Router();

router.post("/register", createdUser)
router.get("confirm-account", confirmAccount)
router.post("/login")
router.post("/recovery-password")
router.route("/recovery-password")

export default router;