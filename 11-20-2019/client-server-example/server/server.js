const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get("/", (req, res) => {
    res.json({
        "ping": "pong"
    });
    res.end();
});

app.listen(8001, () => {
    console.log("RUNNING SERVER!");
});