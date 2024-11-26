import joi from "joi-oid"
import { ERROR_EMPTY, ERROR_LETTERS_SPACE, ERROR_STRING } from "../../utils/msg-Joi.js";

const schema = joi.object({
    search: joi.string().pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/).messages({
        'string.base': ERROR_STRING,
        'string.pattern.base': ERROR_LETTERS_SPACE,
        'string.empty': ERROR_EMPTY
      })
})
export default schema