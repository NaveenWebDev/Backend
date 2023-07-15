const http = require("http");

const server = http.createServer((req, res)=>{
    console.log("server started")
    res.end("<h1>hello World</h1>")
})
server.listen(3000)
