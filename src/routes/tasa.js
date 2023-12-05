//Rutas para la tasa de cambio

const express = require ('express');
const router = express.Router();

const tasaController = require('../controllers/tasaController');

//Rutas para el CRUD de la tasa de cambio

router.get('/', tasaController.list);
router.post('/add', tasaController.save);
router.get('/delete/:id', tasaController.delete);
router.get('/update/:id', tasaController.update);
router.post('/update/:id', tasaController.updateDatos);

//Exportar las rutas
module.exports = router;