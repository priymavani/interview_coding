const products = require("../models/productModel");

exports.getProducts = (req,res) => {
    res.status(200).json(products);
};

exports.addProducts = (req,res) => {
    const newProduct = req.body;

    if(!newProduct.name || !newProduct.price ||!newProduct.id){
        return res.status(400).json({message : "product name , price and id are required"});
    }

    products.push(newProduct);
    res.status(201).json({message : "product added successfully", product : newProduct});
}

exports.updateProduct = (req,res) => {
    const id = parseInt(req.params.id);
    const updatedProduct = req.body;
    const index = products.findIndex(p => p.id === id);

    if(index === -1){
        return res.status(404).json({message : "product not found"});
    }

    updatedProduct.id = id;
    products[index] = updatedProduct;

    res.status(200).json({message : "product updated successfully" , product : updatedProduct});

};

exports.deleteProduct = (req,res) => {
    const id = parseInt(req.params.id);
    const index = products.findIndex(p => p.id === id);

    if(index === -1){
        return res.status(404).json({message : "product not found"});
    }

    products.slice(index , 1);
    res.status(200).json({message : "product deleted successfully"});
}