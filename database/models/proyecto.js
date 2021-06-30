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
    }

    const proyecto = sequelize.define(alias, cols, config);

    return proyecto;

}