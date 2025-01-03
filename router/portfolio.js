import { Router } from "express"
import { sendMailPortfilio } from "../controllers/portfolio/send.js"
import validator from "../middlewares/validator.js"
import schemaPortfolio from "../schema/portfolio/send.js"

const router = Router()

router.post("/sendMail", validator(schemaPortfolio), sendMailPortfilio)

export default router