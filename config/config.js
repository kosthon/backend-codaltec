require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3050,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbPort: process.env.DB_PORT,
  jwtSecret: process.env.JWT_SECRET,
};

// const config = {
//   env: process.env.NODE_ENV || 'dev',
//   port: process.env.PORT || 3050,
//   dbUser: 'ba4528c2029dbf',
//   dbPassword: 'c2dcc15e',
//   dbHost: 'us-cdbr-east-06.cleardb.net',
//   dbName: 'heroku_fcff3d92aca99e8',
//   dbPort: 3306,
// };

module.exports = { config };
