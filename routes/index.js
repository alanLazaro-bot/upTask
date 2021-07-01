var express = require('express');
var router = express.Router();
let proyectoController = require ('../controllers/proyectoController.js');
const {body} = require('express-validator');

/* GET home page. */
router.get('/', proyectoController.index);
router.get('/nuevo-proyecto',proyectoController.nuevo);
router.post('/nuevo-proyecto',

body('nombre').not().isEmpty().trim().escape(),

proyectoController.enviarNuevo);

router.get('/proyectos/:url', proyectoController.proyectoPorUrl);

//Actualizar Proyecto

router.get('/proyecto/editar/:id', proyectoController.formularioEditar);
router.post('/nuevo-proyecto/:id',

body('nombre').not().isEmpty().trim().escape(),

proyectoController.actualizarProyecto);


module.exports = router;
