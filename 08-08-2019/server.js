const express = require('express');
const userRoutes = require('./user-routes');
const groupRoutes = require('./group-routes');

const app = express();


app.use(express.static("public"));

app.use((req, res, next) => {
    console.log("someone made a request");
    next();
});

app.use(userRoutes);
app.use(groupRoutes);
// app.use("/subpath", userRoutes); // /subpath/user

// app.get("/", (req, res) => {
//     res.setHeader("Content-Type", "application/json");
//     res.status(200);
//     res.send();
// });

app.listen(8010, () => {
    console.log("Server running!");
});