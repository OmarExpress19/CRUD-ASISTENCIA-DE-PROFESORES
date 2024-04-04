import jwt from 'jsonwebtoken'
import { JWT_SECRET } from "../libs/keys.js";

export const authRequired = (req, res, next)=>{
    const {token} = req.cookies;
    console.log("Token: " ,token)
    if(!token) return res.status(401).json({message: "Not Token, authorization denied"});

    if(token){
        jwt.verify(token, JWT_SECRET, (err, user)=>{
            if(err) return res.status(403).json({ message: "Invalid Token" })
    
            req.user = user
            next()
        })
    }
    
    
}