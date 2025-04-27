import { Router } from "express";

import {
  addCategories,
  getCategories,
} from "../controller/categoriesController.js";

import protectedRoute from "../middleware/protectedRoute.js";

const router = Router();

router.post("/create_category", protectedRoute, addCategories);
router.get("/get_categories", protectedRoute, getCategories);

export default router;
