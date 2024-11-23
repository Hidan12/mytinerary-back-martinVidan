import User from "../../models/User.js"

const createUser = async (req, res, next) =>{
    try {
        const user = await User.create(req.body)
        return res.status(201).json({
            success: true,
            createUser: user,
            token: req.token
        })
    } catch (e) {
        next(e)
    }
}
export {createUser}