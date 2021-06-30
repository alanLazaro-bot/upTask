const {check, validationResult } = require("express-validator");

let db = require('../database/models')



module.exports = {

    
    index: async(req,res)=>{
        const proyectos = await db.proyecto.findAll();
        res.render('index', 
        { title: `Proyectos ${res.locals.year}`,
         nombrePagina: `Proyectos ${res.locals.year}`,
         proyectos });

    },

    nuevo:async (req,res)=>{
       
        const proyectos = await db.proyecto.findAll();
        res.render('nuevoProyecto', 
        { title: 'Nuevo Proyecto',
         nombrePagina: 'Nuevo Proyecto',
         proyectos });
    },
    
    enviarNuevo : async(req,res)=>{
    

        const nombre = req.body.nombre;
        
        const proyectos = await db.proyecto.create({nombre});
        res.redirect('/');   
        
    },

    proyectoPorUrl: async(req,res)=>{
        const proyectos = await db.proyecto.findAll();


       const proyecto =  await db.proyecto.findOne({
           where:{
               url:req.params.url
           }
        });
      if(!proyecto) return next();

      //render a la vista
      res.render('tareas', {
          title:'Tarea',
          nombrePagina:'Tareas del Proyecto',
          proyecto,
          proyectos
      });

    }
}