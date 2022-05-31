const express = require ("express");
const app = express();
 const pokemon = require ('./models/pokemon')

app.set("view engine","ejs");
app.set ("views","./views");

app.get("/", (req, res)=>{
    res.send("Welcome to the Pokemon App!");
})
app.get("/pokemon", (req, res)=>{
    res.render("index", {data:pokemon, pageTitle: "All the Pokemon"});
})
app.listen (3000, ()=>{
    console.log (`server is running on port: ` );
})