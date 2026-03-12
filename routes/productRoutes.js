const express = require('express');
const router = express.Router();
const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  searchProducts,
} = require('../controllers/productController');

// Search must come before :id route to avoid treating "search" as an ID
router.get('/search', searchProducts);

router.route('/').get(getAllProducts).post(createProduct);

router.route('/:id').get(getProductById).put(updateProduct).delete(deleteProduct);

module.exports = router;
