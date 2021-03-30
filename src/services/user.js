// 抽出來使用用來驗證
// 因為controller可能一直需要取得某一個帳號來去繼續做商業邏輯
import model from '../models/index';

const { users } = model;

class UserService {
  getUser = async (email) => {
    // const name = `Lin`;
    // const token = `Hi ${name}`;
    // const { email } = req.query;
    // findone給予一個物件
    // 這一邊是從passport.js拿出來的
    const user = await users.findOne({
      where: {
        email,
      },
    });
    return user;
  }
}

export default new UserService();
