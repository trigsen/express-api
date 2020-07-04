const express = require('express');
const router = express.Router();
const boardsController = require('../controllers/boards.controller');

router.get('/', boardsController.getAll);

router.get('/:id', boardsController.getByID);

router.post('/', boardsController.create);

router.put('/:id', boardsController.modify);

router.delete('/', boardsController.modify);

module.exports = router;