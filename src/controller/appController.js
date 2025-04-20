import { Financial_Budget, Categories } from "../models/index.js"

export const home = async () => {
    //Muestra los datos

}

export const createBudget = async (req, res) => {
    //Ingresa el 
    const { amount, month, year, category } = req.body
    console.log(amount, month, year, category)

    const new_budget = await Financial_Budget.create({
        amount,
        month,
        year,
        category
    })

    if (!new_budget) {
        return res.status(400).json({ message: "Error al crear el presupuesto" })
    }

}
