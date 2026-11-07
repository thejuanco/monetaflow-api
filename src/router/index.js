import { Router } from "express";
import budgetRouter from "../router/budgetRouter.js"

const router = Router()

router.use("/budgets", budgetRouter)

export default router