import joi from "joi-oid";
import { ERROR_EMPTY, ERROR_REQUIRED, ERROR_STRING } from "../../utils/msg-Joi";
const schema = joi.object({
    cityName: joi.string().required().messages({
      'string.base': ERROR_STRING,
      'string.empty': ERROR_EMPTY,
      'any.required': ERROR_REQUIRED
    }),
    countryName: joi.string().required().messages({
      'string.base': ERROR_STRING,
      'string.empty': ERROR_EMPTY,
      'any.required': ERROR_REQUIRED
    }),
    imgCity: joi.string().uri().required().messages({
      'string.base': ERROR_STRING,
      'string.empty': ERROR_EMPTY,
      'string.uri': ERROR_URL,
      'any.required': ERROR_REQUIRED
    }),
    currencyCoin: joi.string().required().messages({
      'string.base': ERROR_STRING,
      'string.empty': ERROR_EMPTY,
      'any.required': ERROR_REQUIRED
    }),
    description: joi.string().required().messages({
      'string.base': ERROR_STRING,
      'string.empty': ERROR_EMPTY,
      'any.required': ERROR_REQUIRED
    })
  });

  export default schema