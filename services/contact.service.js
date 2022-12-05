const nodemailer = require('nodemailer');
const { models } = require('./../libs/sequelize');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;

const accountTransport = require('../config/account_transport.json');

class ContactService {
  constructor() {}

  async create(data) {
    const newContact = await models.Contact.create(data);

    const oAuth2Client = new OAuth2(
      accountTransport.auth.clientId,
      accountTransport.auth.clientSecret,
      'https://developers.google.com/oauthplayground'
    );

    oAuth2Client.setCredentials({
      refresh_token: accountTransport.auth.refreshToken,
      tls: {
        rejectUnauthorized: false,
      },
    });
    const accesToken = await oAuth2Client.getAccessToken();
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'info@codaltec.com',
        clientId: accountTransport.auth.clientId,
        clientSecret: accountTransport.auth.clientSecret,
        refreshToken: accountTransport.auth.refreshToken,
        accessToken: accesToken,
      },
    });

    transporter.verify().then(() => {
      console.log('Ready send emails');
    });

    await transporter.sendMail({
      from: '"Formulario de Contacto CODALTEC" <info@codaltec.com>', // sender address
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
