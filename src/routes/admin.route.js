const router = require('express').Router();

const { AdminController } = require('../controllers');

router.get('/buku', AdminController.indexBuku);
router.get('/buku/tambah', AdminController.tambahBuku);
router.post('/buku', AdminController.simpanBuku);

// router.get('/penerbit', AdminController.indexPenerbit);

module.exports = router;
