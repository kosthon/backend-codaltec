const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(4);
const apellidos = Joi.string().min(4);
const email = Joi.string().email();
const phone = Joi.string().pattern(/^[0-9]+$/);
const subject = Joi.string();
const description = Joi.string().min(4);

const createContactSchema = Joi.object({
  name: name.required(),
  apellidos: apellidos.required(),
  email: email.required(),
  phone: phone.required(),
  subject: subject.required(),
  description: description.required(),
});

const getContactSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createContactSchema,
  getContactSchema,
};
