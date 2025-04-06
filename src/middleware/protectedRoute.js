import jwt from "jsonwebtoken";
import User from "../models/Users.js";

const protectedRoute = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        
        if(!token) {
            return res.status(401).json({message: "Token no valido"})
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = await User.findByPk(decoded.id).then(response => {
            if(response.password){
                response.password = null
            }
            return response
        })

        return next()
    } catch (error) {
        console.log(error)
        //return res.status(500).json({message: error.message})
    }
}

export default protectedRoute;