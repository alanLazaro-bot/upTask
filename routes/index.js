var express = require('express');
var router = express.Router();
let proyectoController = require ('../controllers/proyectoController.js');

/* GET home page. */
router.get('/', proyectoController.index);
router.get('/nuevo-proyecto',proyectoController.nuevo);
router.post('/nuevo-proyecto', proyectoController.enviarNuevo);


module.exports = router;
