import express from "express";
import cors from "cors";
import db from "./database/db.js";
import cookieParser from "cookie-parser";

import sisRoutes from "./routes/routes.js"

//import jwt from "jsonwebtoken"

const app = express();
//const session = require('express-session');
//const secretKey = 'Asistencia';



app.use(express.urlencoded({extended: true,}));

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}))
app.use(express.json())
app.use(cookieParser())

app.use('/rutas', sisRoutes)
//app.use('/re-mat', matRoutes)

/*app.use(session({
  secret: 'Asistencia',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: true,
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000 // 24 horas
  }
}))*/

try {
    await db.authenticate()
    console.log('Conexion Exitosa al DB')
}catch (error) {console.log('El error de conexion es: ' + error)}

/*app.get('/', (req, res)=>{
    res.send('Hola Mundo')
})*/

app.listen(8000, ()=>{
    console.log('Server UP running in http://localhost:8000/')
})

/*app.post('/login',(req, res)=>{
  if(req.body.correo == "jefe@gmail.com" && req.body.pass == '123'){
    const payload = {
      cheack:true
    };
    console.log('Secret Key', secretKey)
    const token = jwt.sign((payload, secretKey,{
      expiresIn: '7d'
    }))
    res.json({
      message: 'Autenticacion Exitosa',
      token:token
    })
  }else {
    res.json({
      message: 'Correo y/o password son incorrectas'
    })
  }
})*/