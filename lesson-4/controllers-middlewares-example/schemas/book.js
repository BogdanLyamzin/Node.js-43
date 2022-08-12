const Joi = require("joi");

const bookAddSchema = Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
})

module.exports = {
    add: bookAddSchema,
}