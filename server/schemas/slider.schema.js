const Joi = require('joi');

const id = Joi.number().integer();
const image = Joi.string().uri();
const esTitle = Joi.string().min(4);
const enTitle = Joi.string().min(4);
const esDescription = Joi.string().min(4);
const enDescription = Joi.string().min(4);

const createSliderSchema = Joi.object({
  image: image.required(),
  esTitle: esTitle.required(),
  enTitle: enTitle.required(),
  esDescription: esDescription.required(),
  enDescription: enDescription.required(),
});

const updateSliderSchema = Joi.object({
  image: image,
  esTitle: esTitle,
  enTitle: enTitle,
  esDescription: esDescription,
  enDescription: enDescription,
});

const getSliderSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createSliderSchema,
  updateSliderSchema,
  getSliderSchema,
};
