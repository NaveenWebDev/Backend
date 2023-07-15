const http = require("http");

const data = {
    age:5
}

const server = http.createServer((req, res)=>{
    console.log("server started")
    res.setHeader('dummy','dummyValue')
    res.setHeader('content-type', 'text/html')
    // res.end(JSON.stringify(data));
    res.end("hello world")
    console.log(req.url)
})
server.listen(3000)
