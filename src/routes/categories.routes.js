import { Router } from "express";

import {
  addCategories,
  getCategories,
} from "../controller/categoriesController.js";

import protectedRoute from "../middleware/protectedRoute.js";

const router = Router();

router.post("/create_category", protectedRoute, addCategories);
router.get("/get_categories", protectedRoute, getCategories);
router.put("/update_category/:id", protectedRoute, addCategories);
router.delete("/delete_category/:id", protectedRoute, addCategories);

export default router;
