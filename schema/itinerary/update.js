import joi from "joi-oid"
import { ERROR_EMPTY, ERROR_FORMAT_ID, ERROR_LETTERS_SPACE, ERROR_MIN, ERROR_NUMBER, ERROR_POSITIVE, ERROR_REQUIRED, ERROR_STRING, ERROR_URL } from "../../utils/msg-Joi.js";

const schema = joi.object({
    _id: joi.objectId().required().messages({
        'string.pattern.name': ERROR_FORMAT_ID,
        'any.required': ERROR_REQUIRED
    }),
    photoItinerary: joi.string().uri().messages({
      'string.base': ERROR_STRING,
      'string.empty': ERROR_EMPTY,
      'string.uri': ERROR_URL
    }),
    nameItinerary: joi.string().pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/).messages({
      'string.base': ERROR_STRING,
      'string.pattern.base': ERROR_LETTERS_SPACE,
      'string.empty': ERROR_EMPTY
    }),
    price: joi.number().min(1).max(5).messages({
      'number.base': ERROR_NUMBER
    }),
    duration: joi.number().min(0).messages({
      'number.base': ERROR_NUMBER,
      'number.min': ERROR_MIN(0),
    }),
    likes: joi.number().min(0).messages({
      'number.base': ERROR_NUMBER,
      'number.min': ERROR_MIN(0),
      
    }),
    hashtags: joi.array().items(joi.string()).messages({
      'array.base': 'hashtags debe ser un arreglo',
      'any.required': ERROR_REQUIRED
    }),
    messages: joi.string().optional().messages({
      'string.base': ERROR_STRING
    }),
    city: joi.objectId().messages({
      'string.pattern.name': ERROR_FORMAT_ID,
      'any.required': ERROR_REQUIRED
  }),
    user: joi.objectId().messages({
      'string.pattern.name': ERROR_FORMAT_ID,
      'any.required': ERROR_REQUIRED
  })
})

export default schema