import passport from './passport';

class UserMiddleware {
  //
  Authenticate = (req, res, next) => {
    passport.authenticate('local', { session: false }, async (error, user) => {
      if (error) {
        const { status, message } = error;
        res.status(status).json({ message });
        return;
      }
      res.status(200).json({ message: '找使用者資料' });
    })(req, res, next);
  }
}

export default new UserMiddleware();
