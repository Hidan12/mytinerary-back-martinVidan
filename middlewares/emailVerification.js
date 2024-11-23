import User from "../models/User.js"


export default async (req, res, next)=>{
    try {
        const account = await User.findOne({mail: req.body.mail})
        if (account) {
            req.user = {
                _id: account._id,
                password: account.password,
                mail: account.mail,
                name: account.name,
                typeUser: account.typeUser,
                photo: account.photo
            }
            return next()
        }
        return res.status(400).json({
            succes: false,
            message: [
                {mail:"Incorrect username or password"},
                {password:"Incorrect username or password"}
            ]
        })
    } catch (error) {
        next(error)
    }
}