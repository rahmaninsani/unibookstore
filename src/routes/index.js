const router = require('express').Router();

const homeRoute = require('./home.route');
const adminRoute = require('./admin.route');

router.use('/home', homeRoute);
router.use('/admin', adminRoute);
router.use('/', (req, res) => {
  res.redirect('/home');
});

module.exports = router;
