const Joi = require('joi');

const id = Joi.number().integer();
const icon = Joi.string().uri();
const youtube = Joi.string().uri();
const esName = Joi.string().min(4);
const enName = Joi.string().min(4);
const esDescription = Joi.string().min(16);
const enDescription = Joi.string().min(16);

const createBusinessSchema = Joi.object({
  icon: icon.required(),
  youtube: youtube.required(),
  esName: esName.required(),
  enName: enName.required(),
  esDescription: esDescription.required(),
  enDescription: enDescription.required(),
});

const updateBusinessSchema = Joi.object({
  icon: icon,
  youtube: youtube,
  esName: esName,
  enName: enName,
  esDescription: esDescription,
  enDescription: enDescription,
});

const getBusinessSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createBusinessSchema,
  updateBusinessSchema,
  getBusinessSchema,
};
