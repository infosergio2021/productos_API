const { Router } = require('express');
const indexController = require('../controller/index-controller');
const router = Router();
// lista los elementos 
router.get('/',indexController.list);
// muestra el detalle de un elemento
router.get('/:id/details',indexController.details);
// crea un elemento
// router.post('/create', indexController.create);
router.post('/create', indexController.create);
// actualiza un elemento
router.post('/:id/update',indexController.update);
// elimina un elemento
router.post('/:id/delete',indexController.delete);

module.exports = router;