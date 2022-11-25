const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize');

class ProductService {
  constructor() {}

  async create(data) {
    const business = await models.Business.findByPk(data.businessId);
    if (!business) {
      throw boom.notFound('Business not found!');
    }
    const newProduct = await models.Product.create(data);
    return newProduct;
  }

  async find() {
    const rta = await models.Product.findAll();
    return rta;
  }

  async findOne(id) {
    const post = await models.Product.findByPk(id);
    if (!post) {
      throw boom.notFound('Business not found!');
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

module.exports = ProductService;
