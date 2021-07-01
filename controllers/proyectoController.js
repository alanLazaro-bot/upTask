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
        
        await db.proyecto.create({nombre});
        res.redirect('/');   
        
    },

    proyectoPorUrl: async(req,res)=>{
        const proyectosPromise = db.proyecto.findAll();

        const proyectoPromise = db.proyecto.findOne({
            where:{
                url:req.params.url
            }
        });
        const [proyectos,proyecto] = await Promise.all([proyectosPromise,proyectoPromise])
      

      //render a la vista
      res.render('tareas', {
          title:'Tarea',
          nombrePagina:'Tareas del Proyecto',
          proyecto,
          proyectos
      });

    },

    formularioEditar: async(req,res)=>{


        const proyectosPromise = db.proyecto.findAll();

        const proyectoPromise = db.proyecto.findOne({
            where:{
                id:req.params.id
            }
        });
        const [proyectos,proyecto] = await Promise.all([proyectosPromise,proyectoPromise])

        res.render('editarProyecto',{
            title:'Tarea',
            nombrePagina:'Editar Proyecto',
            proyectos,
            proyecto


        });

    },
    actualizarProyecto: async(req,res)=>{
    

        const nombre = req.body.nombre;
        
        await db.proyecto.update(
            {nombre:nombre},
            {where:{
                id:req.params.id
            }}
            
            
            );
        res.redirect('/');   
         

    }
}