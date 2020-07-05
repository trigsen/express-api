const userModel = require('../models/users.model');

const userValidator = async (req, res, next) => {
    try {
        const { name, login, password } = req.body;

        if (!name || !login || !password) {
            return res.status(500).json({
                status: "error",
                message: "All properties are required"
            });
        }

        const user = await userModel.findOne({ 
            name: req.body.name,
            login: req.body.login,
            password: req.body.password
        });

        if (user) {
            return res.status(500).json({
                status: 'error',
                message: 'Current user already exists'
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

module.exports = { userValidator }