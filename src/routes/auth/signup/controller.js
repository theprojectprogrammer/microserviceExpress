const logger = require('../../../core/logger');
async function controller (req, res) {
    logger.error ("Gurudutt Sharma!");
    res.send('Signup!');
}

module.exports = controller;