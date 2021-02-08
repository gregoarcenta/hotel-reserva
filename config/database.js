const mongoose = require("mongoose");
require("dotenv").config();

const host = process.env.DB_HOST;
const dbname = process.env.DB_NAME;

module.exports = {
   connect: () =>
      mongoose
         .connect(`mongodb://${host}/${dbname}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
         })
         .then((db) => console.log("Conexión correcta"))
         .catch((err) => console.log(err)),
   connection: () => {
      if (mongoose.connection) {
         return mongoose.connection;
      }
      return this.connect();
   },
};
