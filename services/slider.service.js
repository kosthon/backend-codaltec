const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize');

class SliderService {
  constructor() {}

  async create(data) {
    const newSlider = await models.Slider.create(data);
    return newSlider;
  }

  async find() {
    const rta = await models.Slider.findAll();
    return rta;
  }

  async findOne(id) {
    const slider = await models.Slider.findByPk(id);
    if (!slider) {
      throw boom.notFound('Slider not found!');
    }
    return slider;
  }

  async update(id, changes) {
    const slider = await this.findOne(id);
    const rta = await slider.update(changes);
    return rta;
  }

  async delete(id) {
    const slider = await this.findOne(id);
    await slider.destroy(id);
    return { id };
  }
}

module.exports = SliderService;
