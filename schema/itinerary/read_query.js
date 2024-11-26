import joi from "joi-oid"
import { ERROR_FORMAT_ID } from "../../utils/msg-Joi.js";

const schema = joi.object({
    city: joi.objectId().messages({
        'string.pattern.name': ERROR_FORMAT_ID
    }),
      id: joi.objectId().messages({
        'string.pattern.name': ERROR_FORMAT_ID
    })
})
export default schema