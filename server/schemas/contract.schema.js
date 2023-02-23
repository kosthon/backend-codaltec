const Joi = require('joi');

const id = Joi.number().integer();
const processNumber = Joi.string();
const processType = Joi.string();
const state = Joi.string();
const purpose = Joi.string();
const amount = Joi.string();
const date = Joi.string();
const file = Joi.string();

const createContractSchema = Joi.object({
  processNumber: processNumber.required(),
  processType: processType.required(),
  state: state.required(),
  purpose: purpose.required(),
  amount: amount.required(),
  date: date.required(),
  file: file.required(),
});

const updateContractSchema = Joi.object({
  processNumber: processNumber,
  processType: processType,
  state: state,
  purpose: purpose,
  amount: amount,
  date: date,
  file: file,
});

const getContractSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createContractSchema,
  updateContractSchema,
  getContractSchema,
};
