import jwt, { JsonWebTokenError } from 'jsonwebtoken';
import passport from './passport';

require('dotenv').config();

class UserMiddleware {
  decodeToken = (token) => {
    try {
      return jwt.verify(token, process.env.APP_KEY);
    } catch (error) {
      return false;
    }
  }

  //
  Authenticate = (req, res, next) => {
    // 要使用哪個策略
    // 根據你的方法名稱,第一個參數會不同,passport.js沒指定預設是local，前後端方離不存ｓｅｓｓｉｏｎ資訊,第三個參數是從pssport的callback取錯誤訊息
    passport.authenticate('local', { session: false }, async (error, user) => {
      if (error) {
        // 解前面passport的錯誤訊息
        const { status, message } = error;
        // respon給前端使用者知道
        res.status(status).json({ message });
        //  要強制停止,否則程式碼會繼續運行,會壞掉
        return;
      }
      if (!user) {
        res.status(401).json({ message: '登入失敗' });
      }
      // const { email, password } = ;
      const data = {

        email: user.email,
        expireTime: new Date().getTime + 10 * 60 * 1000,
      };
      const token = jwt.sign(data, process.env.APP_KEY);
      res.status(200).json({ message: '登入成功', token: token });
    })(req, res, next);
    // 代表是中間的middleware
  }

  JwtAuthenticate = (req, res, next) => {
    passport.authenticate('jwt', { session: false }, (error, user, info) => {
      if (info) {
        res.status(401).json({ message: '尚未登入' });
        return;
      }
      if (error) {
        const { status, message } = error;
        res.status(status).json({ message });
        return;
      }
      const { id } = user;
      req.id = id;
      next();
    })(req, res, next);
  }
}

export default new UserMiddleware();
