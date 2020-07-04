const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users.controller');


router.get('/', usersController.getAll);

router.get('/:id', usersController.getByID);

router.post('/', usersController.create);

router.put('/:id', usersController.modify);

router.delete('/:id', usersController.delete);

module.exports = router;