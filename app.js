/* SERVER */
require('dotenv').config({ path: "./config.env" });
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Running...");
});

app.use(require('./src/router'));

app.listen(4000, () => {
    console.log(`Running on port ${ process.env.PORT }`);
} );