
//en desarollo
const createUserByGoogle = (req, res, next)=>{
    if (req.user && req.user.data && req.user.data.create) {
     
        const dataUser = JSON.stringify(
        {
            name: req.user.data.name.givenName,
            lastName: req.user.data.name.familyName,
            mail: req.user.data.emails[0].value,
            photo: req.user.data.photo[0].value
         }
        )
         const dataParams = encodeURIComponent(dataUser)
         const url = `http://localhost:5173/createUser?user=${dataParams}`
     
        return res.status(201).json()   
    }
}