const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize');

class NewService {
  constructor() {}

  async create(data) {
    const newPost = await models.New.create(data);
    return newPost;
  }

  async find() {
    const rta = await models.New.findAll();
    return rta;
  }

  async findOne(id) {
    const post = await models.New.findByPk(id);
    if (!post) {
      throw boom.notFound('Post not found!');
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

module.exports = NewService;
