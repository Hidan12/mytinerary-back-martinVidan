import { Router } from "express"
import { allCity, cityById } from "../controllers/city/read.js"
import { createCity } from "../controllers/city/created.js"
import { updateCity } from "../controllers/city/update.js"
import { deletedOneCity } from "../controllers/city/deleted.js"
import passport from "../middlewares/passport.js"
import validator from "../middlewares/validator.js"
import validator_params from "../middlewares/validator_params.js"
import validator_query from "../middlewares/validator_query.js"
import schemaCreate from "../schema/city/create.js"
import schemaUpdate from "../schema/city/update.js"
import schemaDelete from "../schema/city/delete.js"
import schemaParams from "../schema/city/read_params.js"
import schemaSearch from "../schema/city/read_search.js"

const router = Router()
//create
router.post("/createdCity", validator(schemaCreate), passport.authenticate('jwt',{session:false}), createCity)


//read
router.get("/allCity", validator_query(schemaSearch), allCity)
router.get("/cityById/:_id", validator_params(schemaParams), cityById)

//update
router.put("/update", validator(schemaUpdate), passport.authenticate('jwt',{session:false}), updateCity)

//deleted
router.delete("/delete", validator(schemaDelete), passport.authenticate('jwt',{session:false}), deletedOneCity)

export default router