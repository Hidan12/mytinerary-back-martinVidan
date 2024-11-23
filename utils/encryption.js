import bcryptjs from "bcryptjs"

export const encryption = ( password )=>{
    return bcryptjs.hashSync(password, 10)
}
export const encryptionCompare = (plainPassword, encryptedPassword) =>{
    return bcryptjs.compareSync( plainPassword, encryptedPassword )
}