const ApiError = require('../error/ApiError');
const { Bascket, Product } = require('../db/models');

class BasketController {
  async getAll(req, res, next) {
    try {
      const findAllBasketsItems = await Bascket.findAll({
        where: {
          user_id: req.session.user.id,
        },
        include: {
          model: Product,
        },
      });
      res.json(findAllBasketsItems);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async addOneItem(req, res, next) {
    try {
      const { id } = req.body;
      const findItem = await Bascket.create({
        user_id: req.session.user.id,
        product_id: id,
      });
      res.json(findItem);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async deleteOneItem(req, res, next) {
    try {
      const { id } = req.params;
      await Bascket.destroy({
        where: {
          user_id: req.session.user.id,
          id,
        },
      });
      res.json(id);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
}

module.exports = new BasketController();
