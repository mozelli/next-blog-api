/* SERVER */
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

/* ROUTES */
app.get('/', (req, res) => {
    res.send("Running...");
});

const postsRouter = require('./src/routes/posts');
app.use('/posts', postsRouter);

app.listen(process.env.PORT_DEV, () => {
    console.log(`Running on port ${ process.env.PORT_DEV }`);
} );