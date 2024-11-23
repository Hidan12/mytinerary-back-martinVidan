import joi from "joi-oid"
import { ERROR_EMPTY, ERROR_NUMBER, ERROR_REQUIRED, ERROR_STRING, ERROR_URL } from "../../utils/msg-Joi";

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
    nameItinerary: joi.string().messages({
      'string.base': ERROR_STRING,
      'string.empty': ERROR_EMPTY
    }),
    price: joi.number().min(1).max(5).messages({
      'number.base': ERROR_NUMBER
    }),
    duration: joi.number().min(0).messages({
      'number.base': ERROR_NUMBER
    }),
    likes: joi.number().messages({
      'number.base': ERROR_NUMBER
    }),
    hashtags: joi.array().items(joi.string()).messages({
      'array.base': 'hashtags debe ser un arreglo',
      'any.required': ERROR_REQUIRED
    }),
    messages: joi.string().optional().messages({
      'string.base': ERROR_STRING
    }),
    city: joi.string().messages({
      'string.base': ERROR_STRING,
      'string.empty': ERROR_EMPTY
    }),
    user: joi.string().messages({
      'string.base': ERROR_STRING,
      'string.empty': ERROR_EMPTY
    })
})

export default schema