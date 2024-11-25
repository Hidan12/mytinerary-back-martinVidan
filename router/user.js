import { Router } from "express"
import { allUser } from "../controllers/user/read.js"
import { updatePassword, updateUser, updateUserItinerary } from "../controllers/user/update.js"
import validator from "../middlewares/validator.js"
import schema from "../schema/user/create.js"
import schemaUpdate from "../schema/user/update.js"
import schemaDelete from "../schema/user/delete.js"
import existingUser from "../middlewares/existingUser.js"
import generateToken from "../middlewares/generateToken.js"
import { createUser } from "../controllers/user/create.js"
import passwordEncryption from "../middlewares/passwordEncryption.js"
import passport from "../middlewares/passport.js"
import { deletedOneUser } from "../controllers/user/deleted.js"

const router = Router()
//Create
router.post("/create", validator(schema), existingUser, passwordEncryption, generateToken, createUser)

//Read
router.get("/all", passport.authenticate('jwt',{session:false}), allUser)

//update
router.put("/update", passport.authenticate('jwt',{session:false}), validator(schemaUpdate), updateUser)
//router.get("/updateItineraryUser", updateUserItinerary)

//deleted
router.delete("/delete", passport.authenticate('jwt',{session:false}), validator(schemaDelete), deletedOneUser)



export default router