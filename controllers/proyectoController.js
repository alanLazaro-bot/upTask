const {check, validationResult } = require("express-validator");
let db = require('../database/models')



module.exports = {

    
    index:function(req,res){
        res.render('index', { title: 'Proyectos', nombrePagina: 'Inicio' });

    },

    nuevo:function(req,res){
        res.render('nuevoProyecto', { title:'Nuevo Proyecto', nombrePagina: 'Nuevo Proyecto'  });
    },
    
    enviarNuevo: async function(req,res){
        const nombre = req.body.nombre;
        
        const proyecto = await db.proyecto.create({nombre});
        res.redirect('/');
       
        
        
        
        
    }
}