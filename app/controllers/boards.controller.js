const boardsModel = require('../models/boards.model');

exports.getAll = async (req, res) => {
    try {
        const boards = await boardsModel.find({});
        res.json({
            data: boards
        });
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
}

exports.getByID = async (req, res) => {
    const id = req.params.id;
    try {
        const board = await boardsModel.findById(id);
        res.json({
            data: board
        });
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
}

exports.create = async (req, res) => {
    const board = new boardsModel({
        title: req.body.title,
        tasks: req.body.tasks
    });

    try {
        const ret = await board.save();
        res.json(ret);
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
}

exports.modify = async (req, res) => {
    const id = req.params.id;
    const board = req.body;
    
    try {
        await boardsModel.findByIdAndUpdate(id, board, { new: true })
        res.json({
            success: true
        });
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
}

exports.delete = async (req, res) => {
    const id = req.params.id;
    try {
        await boardsModel.findOneAndDelete(id);
        res.json({
            success: "true"
        });
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }   
}

exports.addTask = async (id, task) => {
    try {
        const board = await boardsModel.findById(id);
        await boardsModel.findByIdAndUpdate(id, {tasks: board.tasks.push(task)});
    } catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
}