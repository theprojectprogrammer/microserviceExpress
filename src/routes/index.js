const express = require('express')
const router = express.Router()

// Auth Routes
router.use(require('./auth/signup'));
router.use(require('./auth/login'));
router.use(require('./auth/forgot_password'));
router.use(require('./auth/change_password'));
router.use(require('./auth/my_profile'));
module.exports = router;