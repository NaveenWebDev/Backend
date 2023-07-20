const express = require("express");
const fs = require("fs")
const server = express();
const data = JSON.parse(fs.readFileSync("data.json","utf-8"));

server.get('/', (req, res)=>{
    // res.send("<h1>Hello world</h1>");
    // res.sendFile('C:/Users/Naveen/Desktop/New folder/Backend/index.html')
    // res.json(data)
    res.sendStatus(201).send("<h1>hello</h1>");

    // console.log(data);

})




server.listen(4000, ()=>{
    console.log("server Started");
})