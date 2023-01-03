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

  async login(req, res, next) {
    const { username, password } = req.body;
    console.log(username, password);
    if (!username || !password) {
      return next(ApiError.badRequest('Некорректный никнейм или пароль'));
    }

    const findUserUsername = await User.findOne({
      where: { username },
    });
    if (!findUserUsername) {
      return next(ApiError.badRequest('Пользователя с таким никнеймом не существует'));
    }
    const isValid = await bcrypt.compare(password, findUserUsername.password);
    if (!isValid) {
      console.log(isValid, password);
      return next(ApiError.badRequest('Неверный пароль'));
    }
    req.session.user = {
      id: findUserUsername.id, username: findUserUsername.username, email: findUserUsername.email,
    };
    res.json(req.session.user);
  }

  async check(req, res) {
    console.log(req.session.user);
    if (req.session.user) {
      return res.json(req.session.user);
    }
    return res.json({});
  }

  async logout(req, res, next) {
    res.clearCookie('sid', { domain: 'localhost', path: '/' });
    req.session.destroy();
    res.json({});
  }
}

module.exports = new UserController();
