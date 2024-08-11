const express = require('express');
const router  = express.Router();
const controller = require('./controller');

router.get('/auth/my_profile', controller);
module.exports = router;