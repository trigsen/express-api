const taskModel = require('../models/task.model');
const boardController = require('./boards.controller');

exports.getAll = async (req, res) => {
    try {
        const task = await taskModel.find({});
        res.json({
            data: task
        });
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
}

exports.getByID = async (req, res) => {
    const id = req.params.id;
    try {
        const task = await taskModel.findById(id);
        res.json({
            data: task
        });
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
}

exports.create = async (req, res) => {
    const task = new taskModel({
        title: req.body.title,
        description: req.body.description,
        userId: req.body.userId,
        boardId: req.body.boardId
    });

    try {
        const ret = await task.save();
        await boardController.addTask(task.boardId, task);
        res.json(ret);
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
}

exports.modify = async (req, res) => {
    const id = req.params.id;
    const task = req.body;
    
    try {
        await taskModel.findByIdAndUpdate(id, task, { new: true })
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
        await taskModel.findOneAndDelete(id);
        res.json({
            success: "true"
        });
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }   
}

exports.deleteUserFromTask = async (userId) => {
    try {
        const tasks = await taskModel.find(userId);
        tasks.forEach(task => await taskModel.findByIdAndUpdate(task._id, {userId: null}, {new: true}))
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
}