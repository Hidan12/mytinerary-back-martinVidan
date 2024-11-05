import Itinerary from "../../models/Itinerary.js"

const createItinerary = async (req, res, next) =>{
    try {
        const itinerary = await Itinerary.create(req.body)
        res.status(201).json({
            itinerary:itinerary
        })
    } catch (error) {
        next(error)
    }
}


const createManyItinerary = async (req, res, next) =>{
    try {
        const itineraries = await Itinerary.insertMany(req.body)
        res.status(201).json({
            itineraries:itineraries
        })
    } catch (error) {
        next(error)
    }
}

export {createItinerary, createManyItinerary}