import joi from "joi-oid"
import { ERROR_EMPTY, ERROR_NUMBER, ERROR_REQUIRED, ERROR_STRING, ERROR_URL } from "../../utils/msg-Joi";

const schema = joi.object({
    photoItinerary: joi.string().uri().required().messages({
      'string.base': ERROR_STRING,
      'string.empty': ERROR_EMPTY,
      'string.uri': ERROR_URL,
      'any.required': ERROR_REQUIRED
    }),
    nameItinerary: joi.string().required().messages({
      'string.base': ERROR_STRING,
      'string.empty': ERROR_EMPTY,
      'any.required': ERROR_REQUIRED
    }),
    price: joi.number().required().min(1).max(5).messages({
      'number.base': ERROR_NUMBER,
      'any.required': ERROR_REQUIRED
    }),
    duration: joi.number().required().min(0).messages({
      'number.base': ERROR_NUMBER,
      'any.required': ERROR_REQUIRED
    }),
    likes: joi.number().required().messages({
      'number.base': ERROR_NUMBER,
      'any.required': ERROR_REQUIRED
    }),
    hashtags: joi.array().items(joi.string()).required().messages({
      'array.base': 'hashtags debe ser un arreglo',
      'any.required': ERROR_REQUIRED
    }),
    messages: joi.string().optional().messages({
      'string.base': ERROR_STRING
    }),
    city: joi.string().required().messages({
      'string.base': ERROR_STRING,
      'string.empty': ERROR_EMPTY,
      'any.required': ERROR_REQUIRED
    }),
    user: joi.string().required().messages({
      'string.base': ERROR_STRING,
      'string.empty': ERROR_EMPTY,
      'any.required': ERROR_REQUIRED
    })
})

export default schema