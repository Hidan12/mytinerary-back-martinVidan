import User from "../../models/User.js";


const deletedOneUser = async (req,res,next) =>{
    try {
        const deletedUser = await User.deleteOne({_id: req.body._id})
        return res.status(200).json({
            success: true,
            deletedUser: deletedUser
        })
    } catch (error) {
        next(error)
    }
}

export {deletedOneUser}