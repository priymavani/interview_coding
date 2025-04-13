const express = require('express');
const router = express.Router();
const {
    getProducts,
    addProducts,
    updateProduct,
    deleteProduct
} = require('../controllers/productController');

router.get('/' , getProducts);
router.post('/' , addProducts);
router.put('/:id' , updateProduct);
router.delete('/:id' , deleteProduct);

module.exports = router;