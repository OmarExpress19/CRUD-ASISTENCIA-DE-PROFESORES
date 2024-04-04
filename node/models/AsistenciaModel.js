//Importar BD
import db from "../database/db.js";
//Importar Sequelize
import { DataTypes } from "sequelize";

const SisAsis = db.define('asistencia',{
    nomina:{type: DataTypes.INTEGER},
    nombre:{type: DataTypes.STRING},
    apellidoPaterno:{type: DataTypes.STRING},
    apellidoMaterno:{type: DataTypes.STRING},
    asignatura:{type: DataTypes.STRING},
    dia:{type: DataTypes.STRING},
    fecha:{type: DataTypes.DATE}
})

export default SisAsis;