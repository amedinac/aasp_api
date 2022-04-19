const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { dbConnectMysql } = require('./config/mysql');

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

//Invoke Routes
app.use('/api', require('./routes'));

/*app.get('/test', (req, res) => {
    res.json({
        name:'test',
        price: 420
    })
})*/

app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`);
})

dbConnectMysql();