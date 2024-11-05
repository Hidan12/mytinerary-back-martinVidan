import City from "../../models/City.js"


const deletedOneCity = async (req,res,next) =>{
    try {
        const deletedCity = await City.deleteOne({_id: req.body._id})
        return res.status(200).json({
            deletedCity: deletedCity
        })
    } catch (error) {
        next(error)
    }
}

export {deletedOneCity}