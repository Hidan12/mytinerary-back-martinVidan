import Itinerary from "../../models/Itinerary.js"
import "../../models/User.js"
import "../../models/City.js"

const allItinerary = async (req,res,next) =>{
    try {
        const itineraries = await Itinerary.find().populate("city", "cityName").populate("user", "name lastName photo").exec()
        return res.status(200).json({
            length: itineraries.length,
            Itineraries: itineraries
        })
    } catch (e) {
        next(e)
    }
}

const itinerariesByCity = async (req, res, next)=>{
    try {
        const query = req.query.city ? {city: req.query.city}:{}
        const itineraries = await Itinerary.find(query).populate("city", "cityName").populate("user", "name lastName photo").exec()
        return res.status(200).json({
            itineraries: itineraries
        })
    } catch (e) {
        next(e)
    }
}
const itinerariesById = async (req,res,next) => {
    try {
        const itineraries = await Itinerary.findById(req.query.id).populate("city", "cityName").exec()
        return res.status(200).json({
            itineraries: itineraries
        })
    } catch (e) {
        next(e)
    }
}

export {allItinerary, itinerariesByCity, itinerariesById}