const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use(router);

// Exercises all found at 
// https://docs.google.com/presentation/d/1ES4i35qXYjoGMbQJG1GkBpq48nzmO3bOMBcJewrBbHg/edit?usp=sharing
app.listen(8001, () => {
    console.log("Successfully started server!");
});

