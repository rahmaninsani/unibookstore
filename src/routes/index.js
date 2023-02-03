const router = require('express').Router();

const homeRoute = require('./home.route');
const adminRoute = require('./admin.route');
const pengadaanRoute = require('./pengadaan.route');

router.use('/home', homeRoute);
router.use('/admin', adminRoute);
router.use('/pengadaan', pengadaanRoute);
router.use('/', (req, res) => {
  res.redirect('/home');
});

module.exports = router;
