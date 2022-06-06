const mongoose =require('mongoose')
// create schema
const pokemonSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    }
})
// create the model
module.exports = mongoose.model('Pokemon',pokemonSchema)