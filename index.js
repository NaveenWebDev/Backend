const express = require("express");
const fs = require("fs")
const server = express();
const data = JSON.parse(fs.readFileSync("data.json","utf-8"));

// const auth = (req, res, next)=>{
//     // console.log(req.method)
//     if(req.query.password == '123'){
//         next()
//     }else{
//         res.sendStatus(401)
//     }
// }
// // server.use(auth)
server.use(express.json())
server.use(express.static("public"));
const auth = (req, res, next)=>{
    // console.log(req.method)
    if(req.body.password == '123'){
        next()
    }else{
        res.sendStatus(401)
    }
}
// server.use(auth)


server.get('/', auth, (req,res)=>{
    res.json({type:"GET"})
})
server.post('/', auth, (req,res)=>{
    res.json({type:"POST"})
})
server.put('/', (req,res)=>{
    res.json({type:"PUT"})
})
server.delete('/', (req,res)=>{
    res.json({type:"DELETE"})
})
server.patch('/', (req,res)=>{
    res.json({type:"PATCH"})
})

// server.get('/', (req, res)=>{
//     // res.send("<h1>Hello world</h1>");
//     // res.sendFile('C:/Users/Naveen/Desktop/New folder/Backend/index.html')
//     // res.json(data)
//     res.sendStatus(201).send("<h1>hello</h1>");
//     // console.log(data);
// })

server.listen(4000, ()=>{
    console.log("server Started");
})