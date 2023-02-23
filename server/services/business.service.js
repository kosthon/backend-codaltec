const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize');

class BusinessService {
  constructor() {}

  async create(data) {
    const newPost = await models.Business.create(data);
    return newPost;
  }

  async find() {
    const rta = await models.Business.findAll({
      include: ['products'],
    });
    return rta;
  }

  async findOne(id) {
    const post = await models.Business.findByPk(id, {
      include: ['products'],
    });
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

module.exports = BusinessService;
