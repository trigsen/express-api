const { Schema, model } = require('mongoose');

const Board = new Schema({
    title: {
        type: String
    },
    tasks: {
        type: Array
    }
});

module.exports = model('Board', Board);