var express = require('express');
const controller = require('../controllers/controller');

var router = express.Router(); 

router.get('/', controller.index); /* GET - home page  */
router.get('/about', controller.about); /* GET - about page  */

module.exports = router; //Exportamos todo el contenido de la ruta para hacerlo visible
