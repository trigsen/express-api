const express = require('express');
const bodyParser = require('body-parser');
const { connectDb } = require('./config/db.config');

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require('./routes'));

connectDb(() => {
    app.listen(port, () => { 
        console.log('Server Started');
    });
});

app.get('/', (req, res) => {
    res.send('Trello');
});

