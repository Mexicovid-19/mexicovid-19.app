const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  masterKey: process.env.API_KEY,
  port: process.env.PORT || 8000,
  dbUrl: process.env.MONGO_DB_URL
};
