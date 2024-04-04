//Importar BD
import db from "../database/db2.js";
//Importar Sequelize
import { DataTypes } from "sequelize";

const SisBD = db.define('bddocente',{
    diaAsig:{type: DataTypes.STRING},//diaAsig
    nomina:{type: DataTypes.INTEGER},
    nombre:{type: DataTypes.STRING},
    apellidoPaterno:{type: DataTypes.STRING},
    apellidoMaterno:{type: DataTypes.STRING},
    turno:{type: DataTypes.STRING},
    academia:{type: DataTypes.STRING},
    asignatura:{type: DataTypes.STRING},
    laboratorio:{type: DataTypes.STRING},
    entrada:{type: DataTypes.TIME},
    salida:{type: DataTypes.TIME}
})

export default SisBD;