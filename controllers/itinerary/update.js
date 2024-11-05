import Itinerary from "../../models/Itinerary.js"

const updatedLike = async (req,res,next) =>{
    try {
        const update = await Itinerary.updateOne(
            {_id: req.body._id},
            {likes: req.body.likes}
        )
        return res.status(201).json({
            response: update
        })
    } catch (error) {
        next(error)
    }
}

const updateItinerary = async (req, res, next) =>{
    try {
        const newUpdate = await Itinerary.findOneAndUpdate(
            req.body._id,
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

export {updatedLike, updateItinerary}