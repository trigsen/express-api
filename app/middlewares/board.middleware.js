const boardModel = require('../models/boards.model');

const boardValidator = async (req, res, next) => {
    try {
        const { title } = req.body;

        if (!title) {
            return res.status(500).json({
                status: "error",
                message: "All properties are required"
            });
        }

        const board = await boardModel.findOne({ title: req.body.title});
        if (board) {
            return res.status(500).json({
                status: 'error',
                message: 'Current board already exists'
            });
        }
        next();
    } catch(err) {
        return res.status(500).json({
            status: 'error',
            message: 'An error occurred trying to process your request',
        });
    }
}

module.exports = { boardValidator }