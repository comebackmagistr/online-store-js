const ApiError = require('../error/ApiError');
const { Cathegory } = require('../db/models');

class CathegoryController {
  async getAll(req, res, next) {
    try {
      const allCathegories = await Cathegory.findAll();
      res.json(allCathegories);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
}

module.exports = new CathegoryController();
