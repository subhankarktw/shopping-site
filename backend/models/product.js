const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title: {type: String, required:true, trim:true}, //required and trim property
    description: {type: String, required:true, trim:true},
    price: {type: Number, require:true},
    imgurl: {type: String, require:true}
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;