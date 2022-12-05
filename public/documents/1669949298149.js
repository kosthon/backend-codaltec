const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;

const accountTransport = require('./account_transport.json');

async function sendMail() {
  const accesToken = await oAuth2Client.getAccessToken();

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

  console.log(transporter);
  return transporter;
}

module.exports = sendMail;

// create reusable transporter object using the default SMTP transport
// host: 'smtp.gmail.com',
// port: 465,
// secure: false, // true for 465, false for other ports
// auth: {
//   user: 'info@codaltec.com', // generated ethereal user
//   pass: 'Inf0rm4c10n', // generated ethereal password
// },
// tls: {
//   rejectUnauthorized: true,
// },
