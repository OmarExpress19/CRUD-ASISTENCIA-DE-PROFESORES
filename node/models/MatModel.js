//Importar BD
import db from "../database/db.js";
//Importar Sequelize
import { DataTypes } from "sequelize";


const SisMateria = db.define('registromateria',{
    asignatura:{type: DataTypes.STRING},
    laboratorio:{type: DataTypes.STRING}
})

export default SisMateria;