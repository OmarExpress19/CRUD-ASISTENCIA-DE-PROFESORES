import { JWT_SECRET } from "./keys.js";
import  jwt  from "jsonwebtoken";

export function createAccessToken(payload) {
   return new Promise((resolve, reject)=>{
        jwt.sign(payload, JWT_SECRET, {expiresIn:'1d'}, (err, token)=>{
            if (err) reject(err);
            resolve(token)
            //console.log(token)
        });
    })
}