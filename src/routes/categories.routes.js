import { Router } from "express"

import { addCategories } from "../controller/categoriesController.js"
import protectedRoute from "../middleware/protectedRoute.js"

const router = Router()

router.post("/create_category", protectedRoute, addCategories)

export default router