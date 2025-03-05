import { Router } from "express";
import {
  createdUser,
  confirmAccount,
  authenticateUser ,
} from "../controller/authController.js";

const router = Router();

//Vistas publicas
router.post("/register", createdUser)
router.get("/confirm-account/:token", confirmAccount)
router.post("/login", authenticateUser)
router.post("/recovery-password")
router.route("/recovery-password")

export default router;