const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize');

class ContractService {
  constructor() {}

  async create(data) {
    const newFinancial = await models.Contract.create(data);
    return newFinancial;
  }

  async find() {
    const rta = await models.Contract.findAll();
    return rta;
  }

  async findOne(id) {
    const post = await models.Contract.findByPk(id);
    if (!post) {
      throw boom.notFound('Contract State not found!');
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

module.exports = ContractService;
