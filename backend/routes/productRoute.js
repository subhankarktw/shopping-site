const express = require('express');

const router = express.Router();
const productController = require('../controllers/productController');

router.get("/products", productController.products);
router.get("/products/:id", productController.product);
router.post("/products", productController.createProduct);
router.put("/products/:id", productController.updateProduct);
router.delete("/products/:id", productController.deleteProduct);


module.exports = router;