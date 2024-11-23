import joi from "joi-oid"
import { ERROR_ALPHANUM, ERROR_BOOLEAN, ERROR_EMAIL, ERROR_EMPTY, ERROR_FORMAT_ID, ERROR_MIN, ERROR_NUMBER, ERROR_REQUIRED, ERROR_STRING, ERROR_URL } from "../../utils/msg-Joi.js"

const schema = joi.object({
    name: joi.string().required().alphanum().messages({
      'string.base': ERROR_STRING,
      'string.empty': ERROR_EMPTY,
      'string.alphanum': ERROR_ALPHANUM,
      'any.required': ERROR_REQUIRED
    }),
    lastName: joi.string().required().alphanum().messages({
      'string.base': ERROR_STRING,
      'string.empty': ERROR_EMPTY,
      'string.alphanum': ERROR_ALPHANUM,
      'any.required': ERROR_REQUIRED
    }),
    Country: joi.string().required().messages({
      'string.base': ERROR_STRING,
      'string.empty': ERROR_EMPTY,
      'any.required': ERROR_REQUIRED
    }),
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
    }),
    photo: joi.string().uri().required().messages({
      'string.base': ERROR_STRING,
      'string.empty': ERROR_EMPTY,
      'string.uri': ERROR_URL,
      'any.required': ERROR_REQUIRED
    }),
    online: joi.boolean().required().messages({
      'boolean.base': ERROR_BOOLEAN,
      'any.required': ERROR_REQUIRED
    }),
    typeUser: joi.number().integer().required().messages({
      'number.base': ERROR_STRING,
      'number.integer': ERROR_NUMBER,
      'any.required': ERROR_REQUIRED
    }),
    itineraries: joi.array().items(joi.string().regex(/^[0-9a-fA-F]{24}$/)).messages({
      'array.base': ERROR_STRING,
      'string.pattern.base': ERROR_FORMAT_ID
    })
})

  export default schema