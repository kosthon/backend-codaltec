const Joi = require('joi');

const id = Joi.number().integer();
const businessId = Joi.number().integer();
const image = Joi.string().uri();
const esName = Joi.string().min(4);
const enName = Joi.string().min(4);
const esDescription = Joi.string().min(16);
const enDescription = Joi.string().min(16);

const createProductSchema = Joi.object({
  image: image.required(),
  esName: esName.required(),
  enName: enName.required(),
  esDescription: esDescription.required(),
  enDescription: enDescription.required(),
  businessId: businessId.required(),
});

const updateProductSchema = Joi.object({
  image: image,
  esName: esName,
  enName: enName,
  esDescription: esDescription,
  enDescription: enDescription,
  businessId: businessId,
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema };
