const router = require('express').Router();

const { AdminController } = require('../controllers');

router.get('/buku', AdminController.indexBuku);
router.get('/buku/tambah', AdminController.tambahBuku);
router.post('/buku', AdminController.simpanBuku);
router.get('/buku/:bookCode/edit', AdminController.editBuku);
router.put('/buku/:bookCode', AdminController.simpanEditBuku);
router.delete('/buku/:bookCode', AdminController.hapusBuku);

router.get('/penerbit', AdminController.indexPenerbit);
router.get('/penerbit/tambah', AdminController.tambahPenerbit);
router.post('/penerbit', AdminController.simpanPenerbit);
router.get('/penerbit/:publisherCode/edit', AdminController.editPenerbit);
router.put('/penerbit/:publisherCode', AdminController.simpanEditPenerbit);
router.delete('/penerbit/:publisherCode', AdminController.hapusPenerbit);

module.exports = router;
