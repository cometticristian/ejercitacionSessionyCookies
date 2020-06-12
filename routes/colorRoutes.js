var express = require('express');
var router = express.Router();
var colourController = require('../controllers/colourController.js');

router.get('/', colourController.form);
router.get('/colourPicked', colourController.showDos);
router.post('/colourPicked', colourController.show);


module.exports = router;