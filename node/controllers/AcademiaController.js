import SisAca from "../models/AcademiaModel.js";

export const getAllSisAca = async(req, res) =>{
    try {
        const sis = await SisAca.findAll()
        res.json(sis)
    }catch (err) {
        res.json({message: err.message})
    }
}

export const getSisAca = async(req, res)=>{
    try {
        const sis = await SisAca.findAll({
            where: {
                id:req.params.id
            }
        })
        res.json(sis[0])
    }catch (err) {res.status(500).json({message: err.message})}
}

export const createSisAca = async(req, res) => {
    try {
        await SisAca.create(req.body)
        res.json({
            "message":"Registro creado correctamente"
        })
    }catch (err) { res.json({ message: err.message }) }
}

export const updateSisAca = async(req, res) => {
    try {
        SisAca.update(req.body, {
            where: {id: req.params.id}
        })
        res.json({
            "message":"Registro actualizado correctamente"
        })
    }catch (err) { res.json({ message: err.message }) }
}

export const deleteSisAca = async(req, res) => {
    try {
        SisAca.destroy({
            where: { id: req.params.id }
        })
        res.json({
            "message":"Registro eliminado correctamente"
        })
    }catch (err) { res.json({ message: err.message }) }
}