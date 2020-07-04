const express = require('express');
const router = express.Router();

router.use('/users', require('./users.routes'));
router.use('/boards', require('./boards.routes'));
router.use('/tasks', require('./task.routes'));

module.exports = router;