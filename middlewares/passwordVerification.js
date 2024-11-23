import { encryptionCompare } from "../utils/encryption.js"
export default (req, res, next)=>{
    
    const passwordBd = req.user.password
    const passwordBody = req.body.password
    
    if (encryptionCompare(passwordBody, passwordBd)) {
        delete req.body.password
        return next()
    }
    return res.status(400).json({
        succes: false,
        message:[
            {mail:"Incorrect username or password"},
            {password:"Incorrect username or password"}
        ]
    })
}