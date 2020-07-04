const usersModel = require('../models/users.model');
const taskController = require('./task.controller');
exports.getAll = async (req, res) => {
    try {
        const users = await usersModel.find({});
        res.json({
            data: users
        });
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
}

exports.getByID = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await usersModel.findById(id);
        res.json({
            data: user
        });
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
}

exports.create = async (req, res) => {
    const user = new usersModel({
        name: req.body.name,
        login: req.body.login,
        password: req.body.password
    });

    try {
        const ret = await user.save();
        res.json(ret);
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
}

exports.modify = async (req, res) => {
    const id = req.params.id;
    const user = req.body;
    
    try {
        await usersModel.findByIdAndUpdate(id, user, { new: true })
        res.json({
            success: true
        })
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
}

exports.delete = async (req, res) => {
    const id = req.params.id;
    try {
        await usersModel.findOneAndDelete(id);
        await taskController.deleteUserFromTask(id);
        res.json({
            success: "true"
        });
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }   
}