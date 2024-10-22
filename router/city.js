import { Router } from "express"
import { allCity, cityById } from "../controllers/city/read.js"
import { createCity } from "../controllers/city/created.js"

const router = Router()

router.get("/allCity", allCity)
router.get("/cityById/:id", cityById)

router.post("/createdCity", createCity)

export default router