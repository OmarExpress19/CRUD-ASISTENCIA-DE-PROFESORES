//Importar Modelo
import SisModel from "../models/SisModel.js";
import {createAccessToken} from "../libs/jwt.js"
//import bcrypt, { compare } from 'bcryptjs'


/*Metodos para el CRUD*/

//Mostrar todos los registros
//Registro de Usuario(Jefe)
export const getAllSis = async(req, res) =>{
    try {
        const sis = await SisModel.findAll()
        res.json(sis)
    }catch (err) {
        res.json({message: err.message})
    }
}


//Mostrar un registro
//Registro de Usuario(Jefe)
export const getSis = async(req, res)=>{
    try {
        const sis = await SisModel.findAll({
            where: {
                id:req.params.id
            }
        })
        res.json(sis[0])
    }catch (err) {res.status(500).json({message: err.message})}
}


//Crear un registro
//Registro de Usuario(Jefe)
export const createSis = async(req, res) => {
    try {
        /*const { pass } = req.body;
        const hashedPassword = await bcrypt.hash(pass, 10);
        const userSaved = await SisModel.create({...req.body, pass: hashedPassword})*/
        const userSaved = await SisModel.create(req.body)
        const token = await createAccessToken({
            id: userSaved.id,
            rolID: userSaved.rolID,
            nomina: userSaved.nomina,
            nombre: userSaved.nombre,
            apellidoPaterno: userSaved.apellidoPaterno,
            apellidoMaterno: userSaved.apellidoMaterno,
        })
        res.cookie('token', token)
        console.log('COOKIE CREADA')
        res.json({
            "message":"Registro creado correctamente"
        })
    }catch (err) { res.json({ message: err.message }) }
}

/*export const login = async (req, res) =>{
    const {correo, pass} = req.body;
    try {
        const userFound = await SisModel.findOne({where: {correo:correo}});
        if(!userFound) return res.status(400).json({message: "User not found"});

        if (pass !== userFound.pass) return res.status(400).json({message: "Incorrect Password"});

        req.session.user = {correo};
        res.json({message: "Login Successful"})

    }catch (err) { res.status(500).json({ message: err.message }) }
}*/

export const login = async(req, res)=>{
    const {correo, pass} = req.body;
    try {
        const userFound = await SisModel.findOne({where: {correo:correo}});
        if(!userFound) return res.status(400).json({message: "User not found"});

        //const isMatch = await bcrypt.compare(pass, userFound.pass);
        //if (!isMatch) return res.status(400).json({message: "Incorrect Password"});
        if (pass !== userFound.pass) return res.status(400).json({message: "Incorrect Password"});
        
    const token = await createAccessToken({id: userFound.id, rolID: userFound.rolID, nomina: userFound.nomina, nombre: userFound.nombre, apellidoPaterno: userFound.apellidoPaterno, apellidoMaterno: userFound.apellidoMaterno})
        res.cookie("token", token,{
            httpOnly: true
        })
        res.json({
            id: userFound.id,
            rolID: userFound.rolID,
            nomina: userFound.nomina,
            nombre: userFound.nombre,
            apellidoPaterno: userFound.apellidoPaterno,
            apellidoMaterno: userFound.apellidoMaterno,
        });
    }catch (err) { res.status(500).json({ message: err.message }) }
}

export const logout = (req, res) => {
    res.cookie('token','',{
        expires: new Date(0),
    })
    return res.sendStatus(200)
};

/*export const profile = async(req, res) => {
    if(req.session.user){
        res.json({ message: `Welcome, ${req.session.user.nombre}` });
    }else {
        res.status(401).json({ message: 'Not authenticated' });
    }
}*/

export const profile = async(req, res) => {
    //if(!req.user) return res.status(400).json({ message: "User not authenticated" })
    const userFound = await SisModel.findByPk(req.user.id)//Problemas aqui
    if(!userFound) return res.status(400).json({ message: "User not found" })

    switch (req.user.rolID) {
        case 4:
            return res.json({
                rolID: userFound.rolID,
                nomina: userFound.nomina,
                correo: userFound.correo,
                nombre: userFound.nombre,
                apellidoPaterno: userFound.apellidoPaterno,
                apellidoMaterno: userFound.apellidoMaterno,
                createdAt: userFound.createdAt,
                updatedAt: userFound.updatedAt
            });
        case 3:
            return res.json({
                rolID: userFound.rolID,
                correo: userFound.correo,
                nombre: userFound.nombre,
                apellidoPaterno: userFound.apellidoPaterno,
                apellidoMaterno: userFound.apellidoMaterno,
                createdAt: userFound.createdAt,
                updatedAt: userFound.updatedAt
            });
        case 2:
            return res.json({
                rolID: userFound.rolID,
                correo: userFound.correo,
                nombre: userFound.nombre,
                apellidoPaterno: userFound.apellidoPaterno,
                apellidoMaterno: userFound.apellidoMaterno,
                createdAt: userFound.createdAt,
                updatedAt: userFound.updatedAt
            });
        default:
            return res.status(400).json({ message: "Invalid rolID" });
    }

    /*return res.json({
        rolID: userFound.rolID,
        correo: userFound.correo,
        nombre: userFound.nombre,
        apellidoPaterno: userFound.apellidoPaterno,
        apellidoMaterno: userFound.apellidoMaterno,
        createdAt: userFound.createdAt,
        updatedAt: userFound.updatedAt
    })*/
}
//Actualizar un registro
//Registro de Usuario(Jefe)
export const updateSis = async(req, res) => {
    try {
        SisModel.update(req.body, {
            where: {id: req.params.id}
        })
        res.json({
            "message":"Registro actualizado correctamente"
        })
    }catch (err) { res.json({ message: err.message }) }
}


//Eliminar un registro
//Registro de Usuario(Jefe)
export const deleteSis = async(req, res) => {
    try {
        SisModel.destroy({
            where: { id: req.params.id }
        })
        res.json({
            "message":"Registro eliminado correctamente"
        })
    }catch (err) { res.json({ message: err.message }) }
}
