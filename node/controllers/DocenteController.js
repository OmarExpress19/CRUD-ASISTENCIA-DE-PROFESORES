import SisDocente from "../models/DoceModel.js";

//Docente
export const getAllDoce = async(req, res) => {
    try {
        const doce = await SisDocente.findAll()
        res.json(doce)
    }catch (err) {res.json({message: err.message})}
}

//Docente
export const getDoce = async(req, res)=>{
    try {
        const doce = await SisDocente.findAll({
            where: {
                id:req.params.id
            }
        })
        res.json(doce[0])
    }catch (err) {res.json({message: err.message})}
}

//Docente
export const createDoce = async(req, res) => {
    try {
        await SisDocente.create(req.body)
        res.json({
            "message":"Registro creado correctamente"
        })
    }catch (err) { res.json({ message: err.message }) }
}

//Docente
export const updateDoce = async(req, res) => {
    try {
        SisDocente.update(req.body, {
            where: {id: req.params.id}
        })
        res.json({
            "message":"Registro actualizado correctamente"
        })
    }catch (err) { res.json({ message: err.message }) }
}

//Docente
export const deleteDoce = async(req, res) => {
    try {
        SisDocente.destroy({
            where: { id: req.params.id }
        })
        res.json({
            "message":"Registro eliminado correctamente"
        })
    }catch (err) { res.json({ message: err.message }) }
}