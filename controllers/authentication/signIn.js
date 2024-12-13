import User from "../../models/User.js"
import { encryption } from "../../utils/encryption.js"

const sigIn = async (req, res, next) => {
    try {
        const updateOnline = await User.updateOne(
            {_id: req.user._id},
            {online: true}
        )
        return res.status(200).json({
            succes: true,
            user: req.user,
            token: req.token
        })
        
    } catch (error) {
        next(error)
    }
}

const sigInGoogle = async(req, res, next)=>{
    if (req.user && req.user && req.user.create) {    
        try {
            const create = User.create({
                name: req.user.profile.name.givenName,
                lastName: req.user.profile.name.familyName,
                mail: req.user.profile.emails[0].value,
                photo: req.user.profile.photos[0].value,
                password: encryption(req.user.profile.id),
                typeUser: 3,
                google: true,
                online: true,
                //front variable undefined
                Country: "undefined",
                itineraries:[]
            })
        } catch (error) {
           return next(error)
        }
        
    }
    return res.redirect(`https://mytinerary-martin-vidan.vercel.app/?token=${req.token}`)
}
export  {sigIn, sigInGoogle}