const Joi = require('joi');

const id = Joi.number().integer();
const state = Joi.string();
const answer = Joi.string();
const typePerson = Joi.string();
const name = Joi.string().min(4);
const apellidos = Joi.string().min(4);
const typeDocument = Joi.string();
const document = Joi.string();
const email = Joi.string().email();
const phone = Joi.string().pattern(/^[0-9]+$/);
const subject = Joi.string().min(4);
const description = Joi.string().min(4);
const file = Joi.string();

const createPqrSchema = Joi.object({
  state: state.required(),
  answer: answer.required(),
  typePerson: typePerson.required(),
  name: name.required(),
  apellidos: apellidos.required(),
  typeDocument: typeDocument.required(),
  document: document.required(),
  email: email.required(),
  phone: phone.required(),
  subject: subject.required(),
  description: description.required(),
  file: file.required(),
});

const updatePqrSchema = Joi.object({
  state: state,
  answer: answer,
});

const getPqrSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createPqrSchema,
  updatePqrSchema,
  getPqrSchema,
};
