const express = require('express');
const router = express.Router();

const taskController = require('../controllers/task.controller');
const { taskValidator } = require('../middlewares/task.middleware');

router.get('/', taskController.getAll);

router.get('/:id', taskController.getByID);

router.post('/', taskValidator, taskController.create);

router.put('/:id', taskController.modify);

router.delete('/:id', taskController.delete);

module.exports = router;