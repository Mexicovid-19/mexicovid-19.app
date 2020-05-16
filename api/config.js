const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  masterKey: process.env.API_TOKEN || "2abbf7c3-245b-404f-9473-ade729ed4653",
  port: process.env.PORT || 8000, 
  dbUrl: process.env.MONGO_DB_URL || 'mongodb+srv://admin1:mexiCOVID19_@mexicovid-19-cnttu.mongodb.net/mexicovid-19?retryWrites=true&w=majority'
};