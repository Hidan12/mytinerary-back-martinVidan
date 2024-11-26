import joi from "joi-oid"
import { ERROR_ARRAY, ERROR_EMPTY, ERROR_FORMAT_ID, ERROR_LETTERS_SPACE, ERROR_MAX, ERROR_MIN, ERROR_NUMBER, ERROR_POSITIVE, ERROR_REQUIRED, ERROR_STRING, ERROR_URL } from "../../utils/msg-Joi.js";

const schema = joi.object({
    photoItinerary: joi.string().uri().required().messages({
      'string.base': ERROR_STRING,
      'string.empty': ERROR_EMPTY,
      'string.uri': ERROR_URL,
      'any.required': ERROR_REQUIRED
    }),
    nameItinerary: joi.string().required().pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/).messages({
      'string.base': ERROR_STRING,
      'string.pattern.base': ERROR_LETTERS_SPACE,
      'string.empty': ERROR_EMPTY,
      'any.required': ERROR_REQUIRED
    }),
    price: joi.number().required().min(1).max(5).messages({
      'number.base': ERROR_NUMBER,
      'number.min': ERROR_MIN(1),
      'number.max': ERROR_MAX(5),
      'any.required': ERROR_REQUIRED
    }),
    duration: joi.number().required().min(0).messages({
      'number.base': ERROR_NUMBER,
      'number.min': ERROR_MIN(0),
      'any.required': ERROR_REQUIRED
    }),
    likes: joi.number().required().min(0).messages({
      'number.base': ERROR_NUMBER,
      'number.min': ERROR_MIN(0),
      'any.required': ERROR_REQUIRED
    }),
    hashtags: joi.array().items(joi.string()).required().messages({
      'array.base': ERROR_ARRAY,
      'any.required': ERROR_REQUIRED
    }),
    messages: joi.string().optional().messages({
      'string.base': ERROR_STRING
    }),
    city: joi.objectId().required().messages({
      'string.pattern.name': ERROR_FORMAT_ID,
      'any.required': ERROR_REQUIRED
  }),
    user: joi.objectId().required().messages({
      'string.pattern.name': ERROR_FORMAT_ID,
      'any.required': ERROR_REQUIRED
  })
})

export default schema