const express = require('express');

const ContractService = require('../services/contract.service');
const upload = require('../middlewares/multer');
const validatorHandler = require('../middlewares/validator.handler');
const {
  createContractSchema,
  updateContractSchema,
  getContractSchema,
} = require('../schemas/contract.schema');

const router = express.Router();
const contract = new ContractService();

router.get('/', async (req, res, next) => {
  try {
    const categories = await contract.find();
    res.json(categories);
  } catch (error) {
    next(error);
  }
});

router.get(
  '/:id',
  validatorHandler(getContractSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const category = await contract.findOne(id);
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/', upload(), async (req, res, next) => {
  try {
    const body = req.body;
    const newCategory = await contract.create({
      processNumber: body.processNumber,
      processType: body.processType,
      state: body.state,
      purpose: body.purpose,
      amount: body.amount,
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
  validatorHandler(getContractSchema, 'params'),
  validatorHandler(updateContractSchema, 'body'),
  upload(),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const category = await contract.update(id, {
        processNumber: body.processNumber,
        processType: body.processType,
        state: body.state,
        purpose: body.purpose,
        amount: body.amount,
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
  validatorHandler(getContractSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await contract.delete(id);
      res.status(201).json({ id });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
