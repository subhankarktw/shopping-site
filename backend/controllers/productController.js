const Product = require('../models/product');

exports.createProduct = async(req, res) => {
    try{
        const {title,description,price, imgurl} = req.body;

    let newProduct = new Product({
        title,
        description,
        price,
        imgurl
    });

    newProduct = await newProduct.save();

    res.status(201).json(newProduct);
    }  //created 
    catch(e) {
        res.status(500).json({error: e.message});
    }
};

exports.products = async(req, res) => {
    try{
        const products = await Product.find({});  //fetch all product

        res.json(products); //give access to user
    } catch (e){
        res.status(500).json({error: e.message});
    }
};

exports.product = async(req, res) => {
    try{
        const product = await Product.findById(req.params.id);

        if(!product){
            res.json({message: "Product not found :("});
            return;
        }

        res.json(product);
    } catch (e){
        res.status(500).json({error: e.message});
    }
}

exports.updateProduct = async(req, res) => {
    try{
        const {title,description,price, imgurl} = req.body;

    let updatedProduct = new Product({
        title,
        description,
        price,
        imgurl,
        _id:req.params.id
    });

    updatedProduct = await Product.findByIdAndUpdate(req.params.id, updatedProduct);

    res.json({message: `product with ${req.params.id} updated Successfully`});
    }  //created 
    catch(e) {
        res.status(500).json({error: e.message});
    }
};


exports.deleteProduct = async (req, res) => {
    try{
        const deletedProduct = await Product.findByIdAndRemove(req.params.id);
        res.json({message: `product deleted`});
    } catch (e) {
        res.status(500).json({error: e.message});
    }
}