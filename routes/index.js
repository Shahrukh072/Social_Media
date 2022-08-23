const express = require('express');
const router = express.Router();
const homeController = require('../controllera/home_controller');

console.log('router loaded');

router.get('/', homeController.home);
// router.use('/users', require('./users'));


module.exports = router;