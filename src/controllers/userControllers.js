// 從index導入再解構
import models from "../models/index";

const { users } = models;

class UserController {

    getUser = (req, res) => {
        const name = `Lin`;
        const token = `Hi ${name}`;
        res.status(200).json({ message: 'user' })
    }

    postUser = async (req, res) => {
        const { body } = req;
        const { email, password } = body;
        const user = await users.create({
            email,
            password
        })

        res.status(200).json({ user });
    }

    putUser = (req, res) => {

        // const { body } = req;
        // const { id, score } = body;
        // const obj = Array.push({
        //     id,
        //     score
        // })

        res.status(200).json({ message: '更改' })



    }

    delectUser = (req, res) => {
        res.status(200).json({ message: '刪除' })
    }



}
export default new UserController();