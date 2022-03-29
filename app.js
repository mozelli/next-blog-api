/* SERVER */
require('dotenv').config({ path: "./config.env" });
const express = require('express');
const app = express();

/* ROUTES */
app.get('/', (req, res) => {
    res.send("Running...");
});

const postsRouter = require('./src/routes/posts');
app.use('/posts', postsRouter);

app.listen(process.env.PORT, () => {
    console.log(`Running on port ${ process.env.PORT }`);
} );