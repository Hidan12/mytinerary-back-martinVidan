import { Router } from "express"
import city from "./city.js"
import itinerary from "./itinerary.js"

const router = Router()

router.use("/city", city)
router.use("/itinerary", itinerary)


export default router