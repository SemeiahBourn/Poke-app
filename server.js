const express = require ("express");
const app = express();
// const res = require("express/lib/response");
// const PORT = 3000;


app.get("/", (req, res)=>{
    res.send("Welcome to the Pokemon App!");
})
app.listen (3000, ()=>{
    console.log (`server is running on port: ` );
})