import Itinerary from "../../models/Itinerary.js"


const deletedOneItinerary = async (req,res,next) =>{
    try {
        const deletedItinerary = await Itinerary.deleteOne({_id: req.body._id})
        return res.status(200).json({
            response: deletedItinerary
        })
    } catch (error) {
        next(error)
    }
}

export {deletedOneItinerary}