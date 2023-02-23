const express = require('express');
const multer = require('multer');
const upload = multer();

const PqrService = require('../services/pqr.service');
const uploadFile = require('../middlewares/multer');
const validatorHandler = require('../middlewares/validator.handler');
const {
  updatePqrSchema,
  createPqrSchema,
  getPqrSchema,
} = require('../schemas/pqr.schema');

const router = express.Router();
const service = new PqrService();

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
  validatorHandler(getPqrSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const category = await service.findOne(id);
      res.json(category);
    } catch (error) {
      res.json(error);
      next(error);
    }
  }
);

router.post('/', uploadFile(), async (req, res, next) => {
  try {
    const body = req.body;
    const newCategory = await service.create({
      state: body.state, // recibido, en tramite, resuelto.
      answer: body.answer,
      typePerson: body.typePerson,
      name: body.name,
      apellidos: body.apellidos,
      typeDocument: body.typeDocument,
      document: body.document,
      email: body.email,
      phone: body.phone,
      subject: body.subject,
      description: body.description,
      file: req.file.filename,
    });
    res.status(201).json(newCategory);
  } catch (error) {
    next(error);
  }
});

router.patch(
  '/:id',
  validatorHandler(getPqrSchema, 'params'),
  validatorHandler(updatePqrSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const category = await service.update(id, {
        state: body.state, // recibido, en tramite, resuelto.
        answer: body.answer,
      });
      res.json(category);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  '/:id',
  validatorHandler(getPqrSchema, 'params'),
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
