import User from "../models/Users.js"
import { generateID } from "../helpers/token.js"

export const createdUser = async (req, res) => {
    try {
        //Obteniendo los datos del body
        const {name, lastName, password, email} = req.body

        //Valida que se un usuario unico
        const existUser = await User.findOne({email})
        if (existUser) return res.status(400).send({message: 'El correo ya se encuentra registrado'})

        const user = await User.create({
            name,
            lastName,
            password,
            email,
            token: generateID()
        })
        res.json({"message": "El usuario se creo correctamente"})
    } catch (error) {
        console.log(error)
    }
}