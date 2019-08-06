const http = require('http');

// GET request
http.createServer((req, res) => {
    res.writeHead(200);
    res.write("Hello2");
    res.end();
}).listen(8010, (err) => {
    console.log("Running server!");
});