const express = require('express');

const SliderService = require('../services/slider.service');
const uploadImage = require('../middlewares/multerProducts');
const validatorHandler = require('../middlewares/validator.handler');
const {
  createSliderSchema,
  updateSliderSchema,
  getSliderSchema,
} = require('../schemas/slider.schema');

const router = express.Router();
const service = new SliderService();

router.get('/', async (req, res, next) => {
  try {
    const categories = await service.find();
    res.json(categories);
  } catch (error) {
    next(error);
  }
});

router.get(
  '/:id',
  validatorHandler(getSliderSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const category = await service.findOne(id);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/', uploadImage(), async (req, res, next) => {
  try {
    const body = req.body;
    const newCategory = await service.create({
      esTitle: body.esTitle,
      enTitle: body.enTitle,
      enDescription: body.enDescription,
      esDescription: body.esDescription,
      image: req.file.filename,
    });
    res.status(201).json(newCategory);
  } catch (error) {
    next(error);
  }
});

router.patch(
  '/:id',
  validatorHandler(getSliderSchema, 'params'),
  validatorHandler(updateSliderSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const category = await service.update(id, body);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  '/:id',
  validatorHandler(getSliderSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({ id });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
