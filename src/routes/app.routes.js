import { Router } from "express"
import {
    createBudget,
    home
} from "../controller/appController.js"
import protectedRoute from "../middleware/protectedRoute.js"

const router = Router()

router.get("/home", protectedRoute, home)

export default router