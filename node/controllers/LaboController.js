import SisLabo from "../models/LaboModel.js";
import SisBD from "../models/BDModel.js";
import SisDocente from "../models/DoceModel.js";
import SisMateria from "../models/MatModel.js";
import SisAsis from "../models/AsistenciaModel.js";
import multer from 'multer';

//Mostrar toda la informacion
export const getAllLabo = async(req, res) => {
    try {
        const labo = await SisLabo.findAll()
        res.json(labo)
    }catch (err) {res.json({message: err.message})}
}


//Base de Datos
export const getAllBD = async(req, res) => {
    try {
        const bd = await SisBD.findAll()
        res.json(bd)
    }catch (err) {res.json({message: err.message})}
}

export const getAllAsis = async(req, res) => {
    try {
        const asis = await SisAsis.findAll()
        res.json(asis)
    }catch (err) {res.json({message: err.message})}
}

//Mostrar informacion con id
export const getLabo = async(req, res)=>{
    try {
        const labo = await SisLabo.findAll({
            where: {
                id:req.params.id
            }
        })
        res.json(labo[0])
    }catch (err) {res.json({message: err.message})}
}

//Base de Datos
export const getBD = async(req, res)=>{
    try {
        const bd = await SisBD.findAll({
            where: {
                id:req.params.id
            }
        })
        res.json(bd[0])
    }catch (err) {res.json({message: err.message})}
}

export const getAsis = async(req, res)=>{
    try {
        const asis = await SisAsis.findAll({
            where: {
                id:req.params.id
            }
        })
        res.json(asis[0])
    }catch (err) {res.json({message: err.message})}
}

// Configurar Multer para guardar los archivos en una carpeta en el servidor
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  });

  const upload = multer({ storage: storage });

//Agregar Informacion
export const createLabo = async(req, res) => {
    try {
        await SisLabo.create(req.body)
        res.json({
            "message":"Registro creado correctamente"
        })
    }catch (err) { res.json({ message: err.message }) }
}

/*export const createLabo = async(req, res) => {
    try {
        const subir = upload.single('horario')
        await SisLabo.create({...req.body, subir})
        res.json({
            "message":"Registro creado correctamente"
        })
    }catch (err) { res.json({ message: err.message }) }
}*/

//Base de Datos
export const createBD = async(req, res) => {
    try {
        await SisBD.create(req.body)
        res.json({
            "message":"Registro creado correctamente"
        })
    }catch (err) { res.json({ message: err.message }) }
}

export const createAsis = async(req, res) => {
    try {
        await SisAsis.create(req.body)
        res.json({
            "message":"Registro creado correctamente"
        })
    }catch (err) { res.json({ message: err.message }) }
}

//Actualizar Informacion
export const updateLabo = async(req, res) => {
    try {
        SisLabo.update(req.body, {
            where: {id: req.params.id}
        })
        res.json({
            "message":"Registro actualizado correctamente"
        })
    }catch (err) { res.json({ message: err.message }) }
}

//BAse de Datos
export const updateBD = async(req, res) => {
    try {
        SisBD.update(req.body, {
            where: {id: req.params.id}
        })
        res.json({
            "message":"Registro actualizado correctamente"
        })
    }catch (err) { res.json({ message: err.message }) }
}

//Eliminar Informacion
export const deleteLabo = async(req, res) => {
    try {
        SisLabo.destroy({
            where: { id: req.params.id }
        })
        res.json({
            "message":"Registro eliminado correctamente"
        })
    }catch (err) { res.json({ message: err.message }) }
}

//Base de Datos
export const deleteBD = async(req, res) => {
    try {
        SisBD.destroy({
            where: { id: req.params.id }
        })
        res.json({
            "message":"Registro eliminado correctamente"
        })
    }catch (err) { res.json({ message: err.message }) }
}


export const getBDLab = async(req, res)=>{
    try {
        const bd = await SisLabo.findAll({
            where: {
                id:req.params.id
            }
        })
        res.json(bd[0])
    }catch (err) {res.json({message: err.message})}
}


export const getBDAsig = async(req, res)=>{
    try {
        const bd = await SisMateria.findAll({
            where: {
                id:req.params.id
            }
        })
        res.json(bd[0])
    }catch (err) {res.json({message: err.message})}
}

export const getBDoce = async(req, res)=>{
    try {
        const bd = await SisDocente.findAll({
            where: {
                id:req.params.id
            }
        })
        res.json(bd[0])
    }catch (err) {res.json({message: err.message})}
}