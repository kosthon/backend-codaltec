const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize');

class InternalControlService {
  constructor() {}

  async create(data) {
    const newFinancial = await models.InternalControl.create(data);
    return newFinancial;
  }

  async find() {
    const rta = await models.InternalControl.findAll();
    return rta;
  }

  async findOne(id) {
    const post = await models.InternalControl.findByPk(id);
    if (!post) {
      throw boom.notFound('InternalControl not found!');
    }
    return post;
  }

  async update(id, changes) {
    const post = await this.findOne(id);
    const rta = await post.update(changes);
    return rta;
  }

  async delete(id) {
    const post = await this.findOne(id);
    await post.destroy(id);
    return { id };
  }
}

module.exports = InternalControlService;
