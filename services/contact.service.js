const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize');
const transporter = require('../config/mailer');

class ContactService {
  constructor() {}

  async create(data) {
    const newContact = await models.Contact.create(data);

    await transporter.sendMail({
      from: '"Formulario de Contacto CODALTEC" <nforero@codaltec.com>', // sender address
      to: 'info@codaltec.com', // list of receivers
      subject:
        'Solicitud o petición desde el formulario de Contacto: ' + data.subject, // Subject line
      text: 'Solicitud o petición desde el formulario de Contacto', // plain text body
      html: `
        <b>Nombre: </b>${data.name} ${data.apellidos} <br>
        <b>Email: </b>${data.email} <br>
        <b>Teléfono: </b>${data.phone} <br>
        <b>Área de interes : </b>${data.subject} <br>
        <b>Observación: </b>${data.description} <br>
      `, // html body
    });

    return newContact;
  }
}

module.exports = ContactService;
