import {Sequelize} from "sequelize"

const db = new Sequelize('bd_sis_acceso', 'root','',{
    host: 'localhost',
    dialect: 'mysql',
    define: { 
        freezeTableName: true, 
        timestamps: false
    }
})

export default db;