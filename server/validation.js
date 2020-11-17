const Joi = require("joi");

const JoiSchema = Joi.object({
  name: Joi.string().max(50).min(5).required(),
  email: Joi.string().email().min(5).required(),
  password: Joi.string().min(5).required(),
});

module.exports = JoiSchema;
