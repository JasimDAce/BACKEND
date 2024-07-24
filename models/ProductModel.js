const {Schema, model} = require('../connection')

const mySchema = new Schema({
    name: String,
    price : Number,
    color : String,
    weight : Number
})

module.exports = ('product',mySchema);