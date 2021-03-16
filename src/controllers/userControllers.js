class UserController {

    getUser = (req, res) => {
        const name = `Lin`;
        const token = `Hi ${name}`;
        res.status(200).json({ message: 'user' })
    }

    postUser = (req, res) => {
        const { body } = req;
        const { name, phone } = body;
        const profile = {
            name,
            phone
        }
        res.status(200).json({ profile });
    }

    putUser = (req, res) => {

        res.status(200).json({ message: '更改' })
    }

    delectUser = (req, res) => {
        res.status(200).json({ message: '刪除' })
    }



}
export default new UserController();