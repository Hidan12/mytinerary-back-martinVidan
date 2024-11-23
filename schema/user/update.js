import { ERROR_ALPHANUM, ERROR_BOOLEAN, ERROR_EMAIL, ERROR_EMPTY, ERROR_FORMAT_ID, ERROR_MIN, ERROR_NUMBER, ERROR_REQUIRED, ERROR_STRING, ERROR_URL } from "../../utils/msg-Joi"

const schema = joi.object({
    _id: joi.objectId().required().alphanum().messages({
        'string.pattern.name': ERROR_FORMAT_ID,
        'any.required': ERROR_REQUIRED,
        'string.alphanum': ERROR_ALPHANUM
    }),
    name: joi.string().alphanum().messages({
      'string.base': ERROR_STRING,
      'string.empty': ERROR_EMPTY,
      'string.alphanum': ERROR_ALPHANUM
    }),
    lastName: joi.string().messages({
      'string.base': ERROR_STRING,
      'string.empty': ERROR_EMPTY
    }),
    Country: joi.string().messages({
      'string.base': ERROR_STRING,
      'string.empty': ERROR_EMPTY
    }),
    mail: joi.string().email().messages({
      'string.base': ERROR_STRING,
      'string.email': ERROR_EMAIL,
      'string.empty': ERROR_EMPTY
    }),
    password: joi.string().min(7).messages({
      'string.base': ERROR_STRING,
      'number.min': ERROR_MIN(7),
      'string.empty': ERROR_EMPTY
    }),
    photo: joi.string().uri().messages({
      'string.base': ERROR_STRING,
      'string.empty': ERROR_EMPTY,
      'string.uri': ERROR_URL
    }),
    online: joi.boolean().messages({
      'boolean.base': ERROR_BOOLEAN
    }),
    typeUser: joi.number().integer().messages({
      'number.base': ERROR_STRING,
      'number.integer': ERROR_NUMBER
    }),
    itineraries: joi.array().items(joi.string().regex(/^[0-9a-fA-F]{24}$/)).messages({
      'array.base': ERROR_STRING,
      'string.pattern.base': ERROR_FORMAT_ID
    })
})

  export default schema