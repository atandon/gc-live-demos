const http = require('http');

http.createServer((req, res) => {
    // Set headers
    res.setHeader("Content-Type", "application/json");
    res.setHeader('Access-Control-Allow-Origin', '*');

    res.writeHead(200); // this request was a success!
    // Send data to client
    res.write(JSON.stringify({
        firstName: "Ricky",
        lastName: "Bobby",
        age: 200
    }));

    res.end();
}).listen(8010, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Starting server...");
});