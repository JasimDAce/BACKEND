const {Schema, model} = require('../connection')

const mySchema = new Schema({
    product: String,
    price : Number,
    variant : String,
    weight : Number,
})

module.exports = model('product1',mySchema);