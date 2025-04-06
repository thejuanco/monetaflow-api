import { Router } from "express";
import {
  createdUser,
  confirmAccount,
  authenticateUser,
  profileUser,
  forgotPassword,
  compareToken,
  updatePassword
} from "../controller/authController.js";

//Rutas protegidas por el middleware
import protectedRoute from "../middleware/protectedRoute.js";

const router = Router();

//Vistas publicas
router.post("/register", createdUser)
router.get("/confirm-account/:token", confirmAccount)
router.post("/login", authenticateUser)
router.post("/recovery-password", forgotPassword)
router.route("/recovery-password/:token").get(compareToken).post(updatePassword)

//Rutas privadas
router.get("/profile", protectedRoute , profileUser)

export default router;