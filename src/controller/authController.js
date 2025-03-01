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
        res.status(200).json({"message": "El usuario se creo correctamente"})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const confirmAccount = async (req, res) => {
    const { token } = req.params
    const user = await User.findOne({token})

    if(!user){
        const error = new Error("El token no es valído")
        return res.status(400).json({message: error.message})
    }
        user.token = null;
        user.confirm = true;
        await user.save()

        res.json({msg: "Cuenta confirmada correctamente"})
    try {
        
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}