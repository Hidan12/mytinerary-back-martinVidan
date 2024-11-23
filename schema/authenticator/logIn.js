import joi from "joi-oid"
import {ERROR_EMAIL, ERROR_EMPTY, ERROR_MIN, ERROR_REQUIRED, ERROR_STRING} from "../../utils/msg-Joi.js"
const schema = joi.object({
    mail: joi.string().email().required().messages({
        'string.base': ERROR_STRING,
        'string.email': ERROR_EMAIL,
        'string.empty': ERROR_EMPTY,
        'any.required': ERROR_REQUIRED
      }),
      password: joi.string().required().min(7).messages({
        'string.base': ERROR_STRING,
        'string.empty': ERROR_EMPTY,
        'number.min': ERROR_MIN(7),
        'any.required': ERROR_REQUIRED
      })
})
export default schema