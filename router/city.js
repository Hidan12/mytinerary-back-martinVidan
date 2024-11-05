import { Router } from "express"
import { allCity, cityById } from "../controllers/city/read.js"
import { createCity, createManyCity } from "../controllers/city/created.js"
import { updateCity } from "../controllers/city/update.js"
import { deletedOneCity } from "../controllers/city/deleted.js"
import validator_body from "../middlewares/validator_body.js"

const router = Router()
//create
router.post("/createdCity", validator_body, createCity)
router.post("/createMany", validator_body, createManyCity)

//read
router.get("/allCity", allCity)
router.get("/cityById/:id", cityById)

//update
router.put("/update", validator_body, updateCity)

//deleted
router.delete("/delete", validator_body, deletedOneCity)

export default router