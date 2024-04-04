//Importar BD
import db from "../database/db.js";
//Importar Sequelize
import { DataTypes } from "sequelize";

/* 
    const BlogModel = db.define('usuario',{
        title:{type: DataTypes.STRING},
        content: type: DataTypes.STRING},
    })

    export default BlogModel
*/

const SisModel = db.define('usuario',{
    rolID:{type: DataTypes.INTEGER},
    nomina: { type: DataTypes.INTEGER },
    nombre: {type: DataTypes.STRING},
    apellidoPaterno: {type: DataTypes.STRING},
    apellidoMaterno: {type: DataTypes.STRING},
    correo: {type: DataTypes.STRING},
    pass: { type: DataTypes.STRING },
})


export default SisModel;
