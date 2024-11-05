import City from "../../models/City.js"


const updateCity = async (req, res, next) =>{
    try {
        const newUpdate = await City.findOneAndUpdate(
            {_id:req.body._id},
            req.body,
            {new:true}
        )
        res.status(201).json({
            city: newUpdate
        })
    } catch (error) {
        next(error)
    }
}

export {updateCity}