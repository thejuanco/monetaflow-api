import {Categories} from "../models/index.js"

export const getCategories = async (req, res) => {
    try {
        const categories = await Categories.findAll()
        // return res.status(200).json(categories)
        console.log(categories)
    } catch (error) {
        return res.status(500).json({ message: "Error al obtener las categorias" })
    }
}