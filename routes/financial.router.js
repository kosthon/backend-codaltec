const express = require('express');

const FinancialService = require('../services/financial.service');
const upload = require('../middlewares/multer');
const validatorHandler = require('../middlewares/validator.handler');
const {
  createFinacialSchema,
  updateFinancialSchema,
  getFinancialSchema,
} = require('../schemas/financial.schema');

const router = express.Router();
const financial = new FinancialService();

router.get('/', async (req, res, next) => {
  try {
    const categories = await financial.find();
    res.json(categories);
  } catch (error) {
    next(error);
  }
});

router.get(
  '/:id',
  validatorHandler(getFinancialSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const category = await financial.findOne(id);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/', upload(), async (req, res, next) => {
  try {
    const body = req.body;
    const newCategory = await financial.create({
      name: body.name,
      file: req.file.filename,
    });
    res.status(201).json(newCategory);
  } catch (error) {
    next(error);
  }
});

router.patch(
  '/:id',
  validatorHandler(getFinancialSchema, 'params'),
  validatorHandler(updateFinancialSchema, 'body'),
  upload(),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const category = await financial.update(id, {
        name: body.name,
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
  validatorHandler(getFinancialSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await financial.delete(id);
      res.status(201).json({ id });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
