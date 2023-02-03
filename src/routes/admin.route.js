const router = require('express').Router();

const { AdminController } = require('../controllers');

router.get('/buku', AdminController.indexBuku);
router.get('/buku/tambah', AdminController.tambahBuku);
router.post('/buku', AdminController.simpanBuku);
router.get('/buku/:bookCode/edit', AdminController.editBuku);
router.put('/buku/:bookCode', AdminController.simpanEditBuku);
router.delete('/buku/:bookCode', AdminController.hapusBuku);

// router.get('/penerbit', AdminController.indexPenerbit);

module.exports = router;
