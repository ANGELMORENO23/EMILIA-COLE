const express = require("express")
const app = express();
const path = require("path")


app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, "/views/index.html"));
});
app.get("/music",(req,res)=>{
    res.sendFile(path.join(__dirname, "/views/music.html"));
});
app.get("/contact",(req,res)=>{
    res.sendFile(path.join(__dirname, "/views/contact.html"));
});
app.get("/about",(req,res)=>{
    res.sendFile(path.join(__dirname, "/views/about.html"));
});
app.use(express.static("public"));

app.listen(8000,()=>{
    console.log("servicio ubicado en el puerto 8000");
})