// 前後端分離客製化自己的迴船
// 引入套件
// 客製化訊息與處理方法
// 過濾?????
// header braer驗證token(權杖前最)
import passport from 'passport';
import LocalStrategy from 'passport-local';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import UserService from '../services/user';

require('dotenv').config();

// jwt options
const options = {
  secretOrKey: process.env.APP_KEY,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};
// 實體化類別
passport.use(new LocalStrategy({
  // 改用email欄位驗證,預設是username
  usernameField: 'email',
  // done為回乎函式
}, (async (email, password, done) => {
  // database
  const user = await UserService.getUser(email);

  if (!user) {
    return done({ status: 400, message: '沒有該用戶' }, false);
  }
  // 這邊和資料庫連建,密碼要解密後比對
  if (!password) {
    return done({ status: 400, message: '密碼錯誤' }, false);
  }
  return done(null, user);
}
)));

passport.use(new JwtStrategy(options, (payload, done) => {
  const currentTime = new Date().getTime();
  if (currentTime > payload.expireTime) {
    return done({ status: 400, message: 'Token 過期 請重新登入' }, false);
  }
  return done(null, payload);
}));
// 本身就是一個passport類別
export default passport;
