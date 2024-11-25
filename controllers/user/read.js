import User from "../../models/User.js"


const allUser = async (req, res, next) =>{
    try {
        const query = req.query.search ? {name: {$regex: req.query.search, $options:'i'}}:{}
        const users = await User.find(query).populate("itineraries").exec()
        return res.status(200).json({
            success: true,
            length: users.length,
            users: users
        })
    } catch (e) {
        next(e)
    }
}

const verifyToken = (req, res, next)=>{
    res.status(201).json({
        success: true,
        user: req.user
    })

}

export {allUser, verifyToken}