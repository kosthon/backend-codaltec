const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
const bodyParser = require('body-parser');
const { config } = require('./config/config');

const react = require('react');
const { renderToString } = require('react-dom/server');
const { StaticRouter, matchPath } = require('react-router-dom');

const {
  logErrors,
  errorHandler,
  boomErrorHandler,
  ormErrorHandler,
} = require('./middlewares/error.handler');

const app = express();
const port = config.port;
app.use(express.json());

// const whitelist = [
//   'http://localhost:8080',
//   'https://myapp.co',
//   'http://localhost:3000',
//   'http://localhost:3001',
//   'http://localhost:3002',
//   'https://codaltec-backend.herokuapp.com/',
//   'https://zesty-pothos-492673.netlify.app/',
// ];
const options = {
  origin: (origin, callback) => {
    callback(null, true);
    // if (whitelist.includes(origin) || !origin) {
    //   callback(null, true);
    // } else {
    //   callback(new Error('no permitido'));
    // }
  },
};
app.use(cors(options));
require('./utils/auth');

app.get('/', (req, res) => {
  res.send('Server ON!');
});

routerApi(app);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.use('/public/images', express.static('./public/images'));
app.use('/public/documents', express.static('./public/documents'));

app.listen(port, () => {
  console.log('Mi port ' + port);
});

