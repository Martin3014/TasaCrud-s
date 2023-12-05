const express = require ('express');
const router = express.Router();

const tasaController = require('../controllers/tasaController');

router.get('/', tasaController.list);
router.post('/add', tasaController.save);
router.get('/delete/:id', tasaController.delete);
router.get('/update/:id', tasaController.update);
module.exports = router;