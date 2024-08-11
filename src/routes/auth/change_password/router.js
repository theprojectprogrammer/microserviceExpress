const express = require('express');
const router  = express.Router();
const controller = require('./controller');

router.get('/auth/change_password', controller);
module.exports = router;