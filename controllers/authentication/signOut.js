import User from "../../models/User.js"

const signOut = async (req, res, next) => {
    try {
        const updateOnline = await User.findOneAndUpdate(
            {mail: req.user.mail},
            {online: false},
            {new:true}
        )
        return res.status(200).json({
            succes: true,
            message: "disconect" 
        })
        
    } catch (error) {
        next(error)
    }
}

export default signOut