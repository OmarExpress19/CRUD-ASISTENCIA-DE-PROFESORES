//Importar BD
import db from "../database/db2.js";
//Importar Sequelize
import { DataTypes } from "sequelize";

const SisDocente = db.define('registrodocente',{
    nomina:{type: DataTypes.INTEGER},
    nombre: {type: DataTypes.STRING},
    apellidoPaterno: {type: DataTypes.STRING},
    apellidoMaterno: {type: DataTypes.STRING},
    academia:{type: DataTypes.STRING},
    horario:{type: DataTypes.STRING}
})


export default SisDocente;