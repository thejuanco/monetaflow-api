import { Router } from "express";
import {
  createdUser,
  confirmAccount,
  authenticateUser,
  forgotPassword,
  compareToken,
  updatePassword
} from "../controller/authController.js";

const router = Router();

//Vistas publicas
router.post("/register", createdUser)
router.get("/confirm-account/:token", confirmAccount)
router.post("/login", authenticateUser)
router.post("/recovery-password", forgotPassword)
router.route("/recovery-password/:token").get(compareToken).post(updatePassword)

export default router;