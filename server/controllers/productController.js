const ApiError = require('../error/ApiError');
const { Product } = require('../db/models');

class ProductController {
  async getAll(req, res, next) {
    try {
      const allProducts = await Product.findAll();
      res.json(allProducts);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
}

module.exports = new ProductController();
