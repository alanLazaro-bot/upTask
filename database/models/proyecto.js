const slug = require('slug');
const shortId = require('shortid');

module.exports = function(sequelize, dataTypes) {
    let alias = "proyecto";

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING
        },
        url:{
            type:dataTypes.STRING
        },
        
     
    } 
   

    let config = {
        tableName: "proyecto",
        timestamps: false,
        hooks: {
            beforeCreate(proyecto){
                console.log('Antes de insertar en la BD')
                const url = slug(proyecto.nombre).toLowerCase();
                proyecto.url = `${url}-${shortid.generate()}`
            }
        }
        
        
    }

    const proyecto = sequelize.define(alias, cols, config);
    

    return proyecto;

}