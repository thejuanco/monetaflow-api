import { Router } from "express";
import { 
    getAllBudgets,
    getBudgetById,
    createBudget,
    updateBudget,
    deleteBudgetById
} from "../controllers/BudgetController.js";

const router = Router()

router.get("/", getAllBudgets)
router.get("/:id", getBudgetById)
router.post("/", createBudget)
router.put("/:id", updateBudget)
router.delete("/:id", deleteBudgetById)

export default router