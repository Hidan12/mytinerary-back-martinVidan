import { encryption } from "../utils/encryption.js"

export default (req, res, next)=>{
    req.body.password = encryption(req.body.password)
    return next()
}