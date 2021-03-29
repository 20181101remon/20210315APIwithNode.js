// 引入套件
import passport from 'passport';
import LocalStrategy from 'passport-local';
import UserService from '../services/user';

passport.use(new LocalStrategy({
  // 改用email欄位驗證,預設是id
  usernameField: 'email',
}, (async (email, password, done) => {
  const user = await UserService.getUser(email);

  if (!user) {
    return done({ status: 400, message: '沒有該用戶' }, false);
  }
  return done(null, user);
}
)));
export default passport;
