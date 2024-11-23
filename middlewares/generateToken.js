import jwt from "jsonwebtoken"

export default (req, res, next)=>{
    
    const email = req.user  && req.user.mail ? req.user.mail : req.body.mail ? req.body.mail : req.user.profile.emails[0].value
    
    const token = jwt.sign(
        {
            email: email
        },
        process.env.SECRET,
        {
            expiresIn: 60*60*24
        }
    )
    req.token = token
    return next()
}