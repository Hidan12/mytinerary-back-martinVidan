import { Router } from "express"
import { allItinerary, itinerariesByCity, itinerariesById } from "../controllers/itinerary/read.js"
import { createItinerary } from "../controllers/itinerary/create.js"
import { updateItinerary } from "../controllers/itinerary/update.js"
import { deletedOneItinerary } from "../controllers/itinerary/deleted.js"
import validator from "../middlewares/validator.js"
import validator_query from "../middlewares/validator_query.js"
import schemaCreate from "../schema/itinerary/create.js"
import schemaRead from "../schema/itinerary/read_query.js"
import schemaUpdate from "../schema/itinerary/update.js"
import schemaDelete from "../schema/itinerary/delete.js"
import passport from "../middlewares/passport.js"
const router = Router()

//create
router.post("/createItinerary", validator(schemaCreate), passport.authenticate('jwt',{session:false}), createItinerary)

//read
router.get("/allItinerary", allItinerary)
router.get("/itinerariesByCity", validator_query(schemaRead), itinerariesByCity)
router.get("/itinerariesById", validator_query(schemaRead), itinerariesById)

//updated
router.put("/updated", validator(schemaUpdate), passport.authenticate('jwt',{session:false}), updateItinerary)

//deleted
router.delete("/deletedOneItinerary", validator(schemaDelete), passport.authenticate('jwt',{session:false}), deletedOneItinerary)



export default router
