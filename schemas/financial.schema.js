const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string();
const file = Joi.string();

const createFinancialSchema = Joi.object({
  name: name.required(),
  file: file.required(),
});

const updateFinancialSchema = Joi.object({
  name: name,
  file: file,
});

const getFinancialSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createFinancialSchema,
  updateFinancialSchema,
  getFinancialSchema,
};
