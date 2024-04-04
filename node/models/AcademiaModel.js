//Importar BD
import db from "../database/db2.js";
//Importar Sequelize
import { DataTypes } from "sequelize";

const SisAca = db.define('academia',{
    academia: {type: DataTypes.STRING}
})

export default SisAca;