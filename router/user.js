import { Router } from "express"
import { allUser } from "../controllers/user/read.js"
import { updatePassword, updateUserItinerary } from "../controllers/user/update.js"
import validator from "../middlewares/validator.js"
import schema from "../schema/user/create.js"
import existingUser from "../middlewares/existingUser.js"
import generateToken from "../middlewares/generateToken.js"
import { createUser } from "../controllers/user/create.js"
import passwordEncryption from "../middlewares/passwordEncryption.js"

const router = Router()
//Create
router.post("/create", validator(schema), existingUser, passwordEncryption, generateToken, createUser)
//Read
router.get("/all", allUser)
router.get("/updateItineraryUser", updateUserItinerary)



export default router