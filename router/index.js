import { Router } from "express"
import city from "./city.js"
import itinerary from "./itinerary.js"
import user from "./user.js"
import login from "./authentication.js"

const router = Router()
router.use("/login", login)
router.use("/city", city)
router.use("/itinerary", itinerary)
router.use("/user", user)


export default router