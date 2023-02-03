const router = require('express').Router();

const homeRoute = require('./home.route');

router.use('/home', homeRoute);
router.use('/', (req, res) => {
  res.redirect('/home');
});

module.exports = router;
