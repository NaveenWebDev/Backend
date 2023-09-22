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
    console.log(req.query)
    res.send("<h1>Home Page<h1/>");
})
app.get("/:username/:id", (req, res)=>{
    const {username , id} = req.params;
    console.log(req.params);
    res.send(`<h1>Home Page ${username}<h1/>`);
})
// app.post("/", (req, res)=>{
//     res.send("<h1>Home Page by post<h1/>");
//     console.log("i am home page by post");
// })
// app.get("/about", (req, res)=>{
//     res.send("<h1>About Page<h1/>");
// })
// app.get("/contact", (req, res)=>{
//     res.send("<h1>Contact Page<h1/>");
// })
app.get("*", (req, res)=>{
    res.send("404 page not found");
})