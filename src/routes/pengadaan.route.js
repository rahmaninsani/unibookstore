const router = require('express').Router();

const { PengadaanController } = require('../controllers');

router.get('/', PengadaanController.index);

module.exports = router;
