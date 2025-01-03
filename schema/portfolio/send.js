import joi from "joi-oid"
import {ERROR_EMAIL, ERROR_EMPTY, ERROR_MIN, ERROR_REQUIRED, ERROR_STRING} from "../../utils/msg-Joi.js"
const schema = joi.object({
    email: joi.string().email().required().messages({
        'string.base': ERROR_STRING,
        'string.email': ERROR_EMAIL,
        'string.empty': ERROR_EMPTY,
        'any.required': ERROR_REQUIRED
      }),
      subject: joi.string().messages({
        'string.base': ERROR_STRING,
        'string.empty': ERROR_EMPTY
      }),
      message: joi.string().messages({
        'string.base': ERROR_STRING,
        'string.empty': ERROR_EMPTY,
      })
})
export default schema