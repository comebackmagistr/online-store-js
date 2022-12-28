const bcrypt = require('bcrypt');
const ApiError = require('../error/ApiError');
const { User } = require('../db/models');

class UserController {
  async registration(req, res, next) {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return next(ApiError.badRequest('Некорректная почта или пароль!'));
    }
    const findUserUsername = await User.findOne({
      where: { username },
    });
    if (findUserUsername) {
      return next(ApiError.badRequest('Пользователь с таким никнеймом существует'));
    }
    const findUserEmail = await User.findOne({
      where: { email },
    });
    if (findUserEmail) {
      return next(ApiError.badRequest('Пользователь с такой почтой уже существует'));
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username, email, password: hashPassword,
    });
    req.session.user = {
      id: user.id, username: user.username, email: user.email,
    };
    res.json(req.session.user);
  }
}

module.exports = new UserController();
