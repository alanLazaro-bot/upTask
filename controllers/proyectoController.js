const {validationResult } = require("express-validator");

module.exports = {

    
    index:function(req,res){
        res.render('index', { title: 'Proyectos', nombrePagina: 'Inicio' });

    },

    nuevo:function(req,res){
        res.render('nuevoProyecto', { title:'Nuevo Proyecto', nombrePagina: 'Nuevo Proyecto'  });
    },
    
    enviarNuevo:function(req,res){
        //Enviar a la consola lo que el usuario escriba
        //console.log(req.body)
        
        
        
        
    }
}