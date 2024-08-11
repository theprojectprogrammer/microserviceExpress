const express = require('express');
const router  = express.Router();
const controller = require('./controller');

router.get('/auth/login', controller);
module.exports = router;