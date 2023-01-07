const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Cathegory, { foreignKey: 'cathegory_id' });
      this.hasMany(models.Bascket, { foreignKey: 'product_id' });
    }
  }
  Product.init({
    title: DataTypes.STRING,
    about: DataTypes.TEXT,
    photo: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    cathegory_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
