import joi from "joi-oid"
import { ERROR_ALPHANUM, ERROR_FORMAT_ID, ERROR_REQUIRED } from "../../utils/msg-Joi.js"

const schema = joi.object({
    _id: joi.objectId().required().messages({
        'string.pattern.name': ERROR_FORMAT_ID,
        'any.required': ERROR_REQUIRED,
        'string.alphanum': ERROR_ALPHANUM
    })
})

export default schema