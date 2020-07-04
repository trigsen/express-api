const { Schema, model } = require('mongoose');

const Task = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    userId: {
        type: String
    },
    boardId: {
        type: String
    }
});

module.exports = model('Task', Task);