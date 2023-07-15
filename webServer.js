const http = require("http");
const fs = require("fs");

// const indexhtml = fs.readFileSync("index.html","utf-8")
const data = fs.readFileSync("data.json","utf-8")


// =====================server=====================

const server = http.createServer((req, res)=>{
    console.log("server started")
    res.setHeader('dummy','dummyValue')
    // res.setHeader('content-type', 'text/html')
    res.setHeader('content-type', 'application/json')
    // res.end(JSON.stringify(data));
    res.end(data)
    console.log(req.url)
})
server.listen(3000)
