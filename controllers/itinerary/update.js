import Itinerary from "../../models/Itinerary.js"


const updateItinerary = async (req, res, next) =>{
    try {
        const newUpdate = await Itinerary.findOneAndUpdate(
            {_id: req.body._id},
            req.body,
            {new:true}
        )
        res.status(201).json({
            update: newUpdate
        })
    } catch (error) {
        next(error)
    }
}

export {updateItinerary}