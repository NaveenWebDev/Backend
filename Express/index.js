const express = require("express");

const app = express();

let port = 3000;

app.listen(port,()=>{
    console.log(`app is listening on ${port} port number`);
})

// app.use((req, res)=>{
//     // console.log(req)
//     console.log("request received");
//     // res.send("this is a basic response");
//     // res.send({
//     //     name:"naveen",
//     //     age:22
//     // });
//     res.send("<h1>this is heading<h1/>");
// })

app.get("/", (req, res)=>{
    res.send("<h1>Home Page<h1/>");
})
app.get("/about", (req, res)=>{
    res.send("<h1>About Page<h1/>");
})
app.get("/contact", (req, res)=>{
    res.send("<h1>Contact Page<h1/>");
})
app.get("*", (req, res)=>{
    res.send("404 page not found");
})