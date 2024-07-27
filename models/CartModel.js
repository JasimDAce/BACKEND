const {Schema, model} = require('../connection');

const mySchema = new Schema({
    product : String,
    quantity : Number,
    price : Number,
    available : String
})

module.exports = model('cart',mySchema);