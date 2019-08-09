const express = require('express');

const router = express.Router();

router
    .get('/group', (req, res) => {
        res.send();
    })
    .post('/group', (req, res) => {
        res.send();
    })
    .put('/put', (req, res) => {
        res.send();
    });

module.exports = router;