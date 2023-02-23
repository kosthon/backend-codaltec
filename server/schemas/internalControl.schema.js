const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string();
const date = Joi.string();
const file = Joi.string();

const createInternalControlSchema = Joi.object({
  name: name.required(),
  file: file.required(),
  date: date.required(),
});

const updateInternalControlSchema = Joi.object({
  name: name,
  file: file,
  date: date,
});

const getInternalControlSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createInternalControlSchema,
  updateInternalControlSchema,
  getInternalControlSchema,
};
