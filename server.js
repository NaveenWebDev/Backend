const fs = require("fs")


console.log("first printe")
// const txt = fs.readFileSync('demo.txt', "utf-8");
fs.readFile("demo.txt", "utf-8", (err,txt)=>{
    console.log(txt)
})

console.log("last printe")