const mongoose = require('mongoose');

const connectDb =  async (cb) => {
    mongoose.Promise = global.Promise;

    const options = {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }
    
    try {
        await mongoose.connect('mongodb+srv://user:user123@cluster0-joial.mongodb.net/trello', options);
        cb();
    } catch(e) {
        console.log(e);
    }
}

module.exports = { connectDb };