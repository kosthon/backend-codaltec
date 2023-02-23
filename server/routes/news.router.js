const express = require('express');

const NewService = require('../services/new.service');
const uploadImage = require('../middlewares/multerProducts');
const validatorHandler = require('../middlewares/validator.handler');
const {
  updateNewSchema,
  createNewSchema,
  getNewSchema,
} = require('../schemas/new.schema');

const router = express.Router();
const service = new NewService();

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
  validatorHandler(getNewSchema, 'params'),
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
      esDescription: body.esDescription,
      enDescription: body.enDescription,
      image: req.file.filename,
    });
    res.status(201).json(newCategory);
  } catch (error) {
    next(error);
  }
});

router.patch(
  '/:id',
  validatorHandler(getNewSchema, 'params'),
  validatorHandler(updateNewSchema, 'body'),
  uploadImage(),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const category = await service.update(id, {
        esTitle: body.esTitle,
        enTitle: body.enTitle,
        esDescription: body.esDescription,
        enDescription: body.enDescription,
        image: req.file.filename,
      });
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  '/:id',
  validatorHandler(getNewSchema, 'params'),
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
