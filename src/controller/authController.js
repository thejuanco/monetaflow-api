import bcrypt from 'bcrypt'
import User from "../models/Users.js"
import { generateID } from "../helpers/token.js"
import generateJWT from "../helpers/generateJWT.js"
import { sendEmail, sendEmailPass } from "../helpers/sendEmail.js"

export const createdUser = async (req, res) => {
    try {
        //Obteniendo los datos del body
        const {name, lastName, password, email} = req.body

        //Valida que se un usuario unico
        const existUser = await User.findOne({where: {email}})
        if (existUser) return res.status(400).send({message: 'El correo ya se encuentra registrado'})

        const user = await User.create({
            name,
            lastName,
            password,
            email,
            token: generateID()
        })

        //Enviando el correo
        sendEmail({
            token: user.token,
            to: {
            email: user.email,
            name: user.name
            }
        })

        res.status(200).json({"message": "El usuario se creo correctamente"})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const confirmAccount = async (req, res) => {
    try {
        const { token } = req.params
        const user = await User.findOne({where: {token}})

        if(!user){
            const error = new Error("El token no es valído")
            return res.status(400).json({message: error.message})
        }

        user.token = null;
        user.confirm = true;
        await user.save()

        res.json({msg: "Cuenta confirmada correctamente"})
        
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const authenticateUser  = async (req, res) => {
    try {
        const { email, password } = req.body

        //Validaciones
        const user = await User.findOne({where: {email}})
        if(!user){
            return res.status(404).json({message: "El usuario no existe"})
        } else if(!user.confirm){
            return res.status(400).json({message: "Aún no has confirmado su cuenta"})
        }

        //Comparar la contraseña
        if(user.validatePassword(password)){
            res.json({
                id: user.id,
                name: user.name,
                lastName: user.lastName,
                email: user.email,
                token: generateJWT(user.id)
            })
            
        } else {
            const error = new Error("La contraseña es incorrecta")
            return res.status(403).json({message: error.message})
        }
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const forgotPassword = async (req, res) => {
    try{
        const { email } = req.body
        const user = await User.findOne({where: {email}})

        if(!user){
            const error = new Error("El usuario no existe")
            return res.status(404).json({message: error.message})
        }

        //Generar token de recuperación
        user.token = generateID()
        await user.save()

        //Enviando el correo
        sendEmailPass({
            token: user.token,
            to: {
            email: user.email,
            name: user.name
            }
        })

        res.json({message: "Se ha enviado un correo con instrucciones para recuperar tu contraseña"})

    } catch(e){
        return res.status(500).json({message: e.message})
    }
}

export const compareToken = async (req, res) => {
    try {
        const { token } = req.params
        console.log(token)

        const tokenExist = await User.findOne({where: {token}})

        if(tokenExist){
            res.json({message: "Token correcto"})
        } else {
            res.status(400).json({message: "Token incorrecto"})
        }

    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

export const updatePassword = async (req, res) => {
    try {
        const { password } = req.body
        const { token } = req.params

        const user = await User.findOne({where: {token}})
        if(!user){
            const error = new Error("El usuario no existe")
            return res.status(404).json({message: error.message})
        }

        //Actualizar la contraseña y eliminar el token
        user.token = null
        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(password, salt)
        await user.save()

        res.json({message: "La contraseña se actualizo correctamente"})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}