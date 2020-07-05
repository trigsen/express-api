const express = require('express');
const router = express.Router();

const boardsController = require('../controllers/boards.controller');
const { boardValidator } = require('../middlewares/board.middleware');

router.get('/', boardsController.getAll);

router.get('/:id', boardsController.getByID);

router.post('/', boardValidator, boardsController.create);

router.put('/:id', boardsController.modify);

router.delete('/', boardsController.modify);

module.exports = router;