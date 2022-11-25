const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');
const transporter = require('../config/mailer');

class PqrService {
  constructor() {}

  async create(data) {
    const newPost = await models.Pqr.create(data);

    await transporter.sendMail({
      from: '"Formulario de Contacto CODALTEC" <nforero@codaltec.com>', // sender address
      to: 'info@codaltec.com', // list of receivers
      subject: 'PQRS desde los formularios de la web: ' + data.subject, // Subject line
      text: 'PQRS desde los formularios de la web', // plain text body
      html: `
        <b>Nombre: </b>${data.name} ${data.apellidos} <br>
        <b>Número de documento: </b>${data.document} <br>
        <b>Email: </b>${data.email} <br>
        <b>Teléfono: </b>${data.phone} <br>
        <b>Observación o descripción de la PQRS: </b>${data.description} <br>
      `, // html body
    });
    return newPost;
  }

  async find() {
    const rta = await models.Pqr.findAll();
    return rta;
  }

  async findOne(id) {
    const post = await models.Pqr.findByPk(id);
    if (!post) {
      throw boom.notFound('Pqr not found!');
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

module.exports = PqrService;
