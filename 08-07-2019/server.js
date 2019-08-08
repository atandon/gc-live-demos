const express = require('express');
const bodyParser = require('body-parser');

const server = express();

// Middleware
server.use(bodyParser.json());

server.get("/", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send("hello");
    res.end();
});

server.post("/user", (req, res) => {
    console.log(req.body);
    console.log("1");
    res.json({
        user: req.body.user
    });

    res.end();
});

server.get("/user/:id/:hello", (req, res) => {
    console.log(req.params.id);
    console.log(req.params.hello);
    console.log(req.params.test);
    res.send();
    res.end();
});

server.listen(8010, () => {
    console.log("Server running!");
});