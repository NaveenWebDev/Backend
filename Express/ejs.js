const express = require("express");

const app = express();
const port = 3000;

app.listen(port, ()=>{
    console.log(`app is listening of port no. ${port}`);
})

app.set("view enginne", "ejs"); 

app.get("/", (req, res)=>{
    res.render("home.ejs");
})

ap.get("/dice", (req, res)=>{
    res.render("dice.ejs")
})