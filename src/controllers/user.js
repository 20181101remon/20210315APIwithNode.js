class UserController{
    getUser = (req,res) => {
        const name=`Lin`;
        const token=`Hi ${name}`;
        res.status(200).json({message:'user'})
    }

    postUser = (req,res) =>{
        const {body} =req;
        const {name,phone}=body;
        const profile ={
            name,
            phone
        }
        res.status(200).json({profile});
}
}
export default new UserController();