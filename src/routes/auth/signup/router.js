const express = require('express');
const router  = express.Router();
const controller = require('./controller');

router.get('/auth/signup', controller);
module.exports = router;