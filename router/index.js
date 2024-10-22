import { Router } from "express"
import city from "./city.js"

const router = Router()

router.use("/city", city)


export default router