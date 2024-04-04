//Importar BD
import db from "../database/db2.js";
//Importar Sequelize
import { DataTypes } from "sequelize";


const SisLabo = db.define('registrolabo',{
    laboratorio:{type: DataTypes.STRING},
    horario:{type: DataTypes.STRING}
})

export default SisLabo;