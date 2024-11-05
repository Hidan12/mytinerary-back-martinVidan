import { Router } from "express"
import { allItinerary, itinerariesByCity, itinerariesById } from "../controllers/itinerary/read.js"
import { createItinerary, createManyItinerary } from "../controllers/itinerary/create.js"
import { updatedLike, updateItinerary } from "../controllers/itinerary/update.js"
import { deletedOneItinerary } from "../controllers/itinerary/deleted.js"
import validator_body from "../middlewares/validator_body.js"
const router = Router()

//create
router.post("/createItinerary", validator_body, createItinerary)
router.post("/createManyItinerary", validator_body, createManyItinerary)

//read
router.get("/allItinerary", allItinerary)
router.get("/itinerariesByCity", itinerariesByCity)
router.get("/itinerariesById", itinerariesById)

//updated
router.put("/updatedLike", validator_body, updatedLike)
router.put("/updated", validator_body, updateItinerary)

//deleted
router.delete("/deletedOneItinerary", validator_body, deletedOneItinerary)



export default router
