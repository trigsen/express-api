const { Schema, model } = require('mongoose');

const User = new Schema({
    name: {
        type: String
    },
    login: {
        type: String
    },
    password: {
        type: String
    }
});

module.exports = model('user', User);