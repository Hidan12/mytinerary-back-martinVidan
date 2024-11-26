import joi from "joi-oid"
import { ERROR_EMPTY, ERROR_FORMAT_ID, ERROR_REQUIRED, ERROR_STRING, ERROR_URL } from "../../utils/msg-Joi.js";

const schema = joi.object({
    _id: joi.objectId().required().messages({
        'string.pattern.name': ERROR_FORMAT_ID,
        'any.required': ERROR_REQUIRED
    }),
    cityName: joi.string().messages({
      'string.base': ERROR_STRING,
      'string.empty': ERROR_EMPTY
    }),
    countryName: joi.string().messages({
      'string.base': ERROR_STRING,
      'string.empty': ERROR_EMPTY
    }),
    imgCity: joi.string().uri().messages({
      'string.base': ERROR_STRING,
      'string.empty': ERROR_EMPTY,
      'string.uri': ERROR_URL
    }),
    currencyCoin: joi.string().messages({
      'string.base': ERROR_STRING,
      'string.empty': ERROR_EMPTY
    }),
    description: joi.string().messages({
      'string.base': ERROR_STRING,
      'string.empty': ERROR_EMPTY
    })
  });

  export default schema