const http = require("http");
const fs = require("fs");

const indexhtml = fs.readFileSync("index.html","utf-8")
const data = fs.readFileSync("data.json","utf-8")


// =====================server=====================

const server = http.createServer((req, res)=>{

    switch (req.url) {
        case '/':
            res.setHeader('content-type', 'text/html')
            res.end(indexhtml)
            break;
        case '/api':
            res.setHeader('content-type', 'application/json')
            // res.end(JSON.stringify(data));
            res.end(data)
            break;
        default:
            break;
    }
    // res.setHeader('dummy','dummyValue')
    // console.log(req.url)
})
server.listen(3000)
