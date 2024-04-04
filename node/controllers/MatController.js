import SisMateria from "../models/MatModel.js";
import SisLabo from "../models/LaboModel.js";


//Registro de Materia(Laboratorista)
export const getAllMat = async(req, res) => {
    try {
        const mat = await SisMateria.findAll()
        res.json(mat)
    }catch (err) {res.json({message: err.message})}
}


//Materia(Laboratorista)
export const getMat = async(req, res)=>{
    try {
        const mat = await SisMateria.findAll({
            where: {
                id:req.params.id
            }
        })
        res.json(mat[0])
    }catch (err) {res.json({message: err.message})}
}


//Materia(Laboratorista)
export const createMat = async(req, res) => {
    try {
        await SisMateria.create(req.body)
        res.json({
            "message":"Registro creado correctamente"
        })
    }catch (err) { res.json({ message: err.message }) }
}


//Materia(Laboratorista)
export const updateMat = async(req, res) => {
    try {
        SisMateria.update(req.body, {
            where: {id: req.params.id}
        })
        res.json({
            "message":"Registro actualizado correctamente"
        })
    }catch (err) { res.json({ message: err.message }) }
}


//Materia(Laboratorista)
export const deleteMat = async(req, res) => {
    try {
        SisMateria.destroy({
            where: { id: req.params.id }
        })
        res.json({
            "message":"Registro eliminado correctamente"
        })
    }catch (err) { res.json({ message: err.message }) }
}

//Consulta la tabla de Laboratorio para buscar informacion
export const getMatLab = async(req, res)=>{
    try {
        const labo = await SisLabo.findAll({
            where: {
                id:req.params.id
            }
        })
        res.json(labo[0])
    }catch (err) {res.json({message: err.message})}
}

