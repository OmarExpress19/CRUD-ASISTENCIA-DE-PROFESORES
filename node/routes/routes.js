import express from "express";
import { deleteSis ,updateSis ,createSis, getAllSis, getSis, login, logout, profile} from "../controllers/SisController.js";
import { getAllMat, getMat, createMat, updateMat, deleteMat, getMatLab} from "../controllers/MatController.js";
import { getAllLabo, getLabo, createLabo, updateLabo, deleteLabo, getAllBD, getBD, createBD, updateBD, deleteBD, getBDLab, getBDAsig, getAsis, createAsis, getAllAsis} from "../controllers/LaboController.js"
import { getAllDoce, getDoce, createDoce, updateDoce, deleteDoce } from "../controllers/DocenteController.js"
import { createSisAca, deleteSisAca, getAllSisAca, getSisAca, updateSisAca } from "../controllers/AcademiaController.js";
import { authRequired } from "../middlewares/validateToken.js";

const router = express.Router();

router.get('/usuario', getAllSis)
router.get('/usuario:id', getSis)
router.post('/usuario', createSis)
router.put('/usuario:id', updateSis)
router.delete('/usuario:id', deleteSis)

router.get('/mat', getAllMat)
router.get('/mat:id', getMat)
router.post('/mat', createMat)
router.put('/mat:id', updateMat)
router.delete('/mat:id', deleteMat)
router.get('/labo:id', getMatLab)//Ruta para buscar laboratorios en la tabla de laboratorios

router.get('/labo', getAllLabo)
router.get('/labo:id', getLabo)
router.post('/labo', createLabo)
router.put('/labo:id', updateLabo)
router.delete('/labo:id', deleteLabo)

router.get('/docente', getAllDoce)
router.get('/docente:id', getDoce)
router.post('/docente', createDoce)
router.put('/docente:id', updateDoce)
router.delete('/docente:id', deleteDoce)

router.get('/bd', getAllBD)
router.get('/bd:id', getBD)
router.post('/bd', createBD)
router.put('/bd:id', updateBD)
router.delete('/bd:id', deleteBD)
router.get('/labo:id', getBDLab)
router.get('/mat:id', getBDAsig)
//router.get('/doce:id', getBDoce)

router.post('/login',login)
router.post('/logout', logout)
//router.get('/profile', profile)
router.get('/profile', authRequired, profile)

router.get('/academia', getAllSisAca)
router.get('/academia:id', getSisAca)
router.post('/academia', createSisAca)
router.put('/academia:id', updateSisAca)
router.delete('/academia:id', deleteSisAca)

router.get('/asistencia', getAllAsis)
router.get('/asistencia:id', getAsis)
router.post('/asistencia', createAsis)

export default router;