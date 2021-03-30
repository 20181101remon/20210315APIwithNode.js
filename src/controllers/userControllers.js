// 從index導入再解構
// ORM進入點
import _ from 'lodash';
import models from '../models/index';
import UserService from '../services/user';
// 裡面隨著功能增加會有更多的不同的檔案,將其視為一個物件去解構他
const { users } = models;

class UserController {
  // get拿不道body的東西
  getUser = async (req, res) => {
    const { email } = req.body;
    const user = await users.findOne({
      where: {
        email,
      },
    });

    // const {email}=req.params;
    // const user =await UserService.getUser(email);
    // res.status(200).json({})
    // const name = `Lin`;
    // const token = `Hi ${name}`;
    // const { email } = req.query;
    // findone給予一個物件
    // const user = await users.findOne({
    //     where: {
    //         email,
    //     },
    // });
    // const user = await users.findAll({
    //   attributes: { exclude: ['password'] },
    // });

    // const reponse = _.map(user, (o) => ({
    //   ...o.dataValues,
    //   vip: true,
    // }));

    res.status(200).json({ user });

    // 可使用req.method查看前端請求的http動作
    // 可適用req.url查看新增的url
  }

  postUser = async (req, res) => {
    const { body } = req;
    // 使用consol.log查看是否有讀到body的內容
    // 避免欄位被猜測只解構需要的內容存入存入
    const { email, password } = body;
    // ORM 請幫我加入一筆資料
    // async事物了避免Hoisting事件,因為程式發現前面的佔比較多的記憶體,會偷偷的處理比較簡單的
    const user = await users.create({
      email,
      password,
    });
    // 上面執行完後才會執行成功
    res.status(200).json({ user });
  }

  putUser = async (req, res) => {
    // const { body } = req;
    // const { id, score } = body;
    // const obj = Array.push({
    //     id,
    //     score
    // })
    const { body } = req;
    const { email, password } = body;

    const user = await users.update({
      password,
    }, {
      where: {
        email,
      },
    });
    console.log(user);

    res.status(200).json({ user });
  }

  delectUser = async (req, res) => {
    const { body } = req;
    const { email } = body;
    const user = await users.destroy({
      where: {
        email,
      },
    });
    res.status(200).json({ user });
  }
}
export default new UserController();
