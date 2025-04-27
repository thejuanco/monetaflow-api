import { Categories, User } from "../models/index.js";

export const addCategories = async (req, res) => {
  try {
    const { name, type } = req.body;
    const userId = req.user.id;

    if(!name || !type) {
      return res.status(400).json({ message: "Faltan datos" });
    }

    const nameExists = await Categories.findOne({ where: { name }})
    if (nameExists) {
      return res.status(400).json({ message: "La categoria ya existe" });
    }

    const newCategory = await Categories.create({
      name,
      type,
      userId,
    });
    return res.status(200).json(newCategory);
  } catch (error) {
    return res.status(500).json({ message: "Error al crear la categoria" });
  }
};

export const getCategories = async (req, res) => {
  try {
    const categories = await Categories.findAll();
    return res.status(200).json(categories);
  } catch (error) {
    return res.status(500).json({ message: "Error al obtener las categorias" });
  }
};

export const updateCategory = async (req, res) => {}

export const deleteCategory = async (req, res) => {}
