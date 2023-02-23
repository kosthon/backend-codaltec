const express = require('express');

const InternalControlService = require('../services/internalControl.service');
const upload = require('../middlewares/multer');
const validatorHandler = require('../middlewares/validator.handler');
const {
  createInternalControlSchema,
  updateInternalControlSchema,
  getInternalControlSchema,
} = require('../schemas/internalControl.schema');

const router = express.Router();
const internalControl = new InternalControlService();

router.get('/', async (req, res, next) => {
  try {
    const categories = await internalControl.find();
    res.json(categories);
  } catch (error) {
    next(error);
  }
});

router.get(
  '/:id',
  validatorHandler(getInternalControlSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const category = await internalControl.findOne(id);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/', upload(), async (req, res, next) => {
  try {
    const body = req.body;
    const newCategory = await internalControl.create({
      name: body.name,
      date: body.date,
      file: req.file.filename,
    });
    res.status(201).json(newCategory);
  } catch (error) {
    next(error);
  }
});

router.patch(
  '/:id',
  validatorHandler(getInternalControlSchema, 'params'),
  validatorHandler(updateInternalControlSchema, 'body'),
  upload(),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const category = await internalControl.update(id, {
        name: body.name,
        date: body.date,
        file: req.file.filename,
      });
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  '/:id',
  validatorHandler(getInternalControlSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await internalControl.delete(id);
      res.status(201).json({ id });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
