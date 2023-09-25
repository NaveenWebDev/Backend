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

app.get("/dice", (req, res)=>{
    const data = Math.floor(Math.random() * 6) + 1;
    res.render("dice.ejs", {num : data})
})