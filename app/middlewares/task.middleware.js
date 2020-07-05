const taskModel = require('../models/task.model');
const boardModel = require('../models/boards.model');
const userModel = require('../models/users.model');
const { ObjectID } = require('mongodb');


const taskValidator = async (req, res, next) => {
    try {
        const { title, description, userId, boardId } = req.body;

        if (!title || !description || !userId || !boardId) {
            return res.status(500).json({
                status: "error",
                message: "All properties are required"
            });
        }

        const board = await boardModel.findById(boardId);
        if (!board) {
            return res.status(500).json({
                status: "error",
                message: `Board with ${boardId} doesn't exist`
            });
        }

        const user = await userModel.findById(userId);
        if (!user) {
            return res.status(500).json({
                status: "error",
                message: `User with ${userId} doesn't exist`
            });
        }

        const task = await taskModel.findOne({ 
            title: req.body.title,
            description: req.body.description,
            userId: req.body.userId,
            boardId: req.body.boardId
        });

        if (task) {
            return res.status(500).json({
                status: 'error',
                message: 'Current task already exists'
            });
        }
        next();
        
    } catch (err) {
        return res.status(500).json({
            status: 'error',
            message: 'An error occurred trying to process your request',
        });
    }
}

module.exports = { taskValidator }