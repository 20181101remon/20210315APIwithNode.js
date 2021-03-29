// 抽出來使用用來驗證

import model from '../models/index';

const { users } = model;

class UserService {
  getUser = async (email) => {
    // const name = `Lin`;
    // const token = `Hi ${name}`;
    // const { email } = req.query;
    // findone給予一個物件
    const user = await users.findOne({
      where: {
        email,
      },
    });
    return user;
  }
}

export default new UserService();
