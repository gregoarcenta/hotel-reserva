const express = require("express");
const path = require("path");
const hbs = require("express-handlebars");

//Rutas
const users = require("./routes/users");

const db = require("./config/database");

//configuracion de dotenv
require("dotenv").config();

//inicializacion de express
const app = express();
const port = process.env.PORT || 3000;

//Configuracion de handlebars
app.set("views", path.join(__dirname, "views"));
app.set("view engine", ".hbs");
app.engine(
   ".hbs",
   hbs({
      defaultLayout: "main",
      layoutsDir: path.join(app.get("views"), "layouts"),
      partialsDir: path.join(app.get("views"), "partials"),
      extname: ".hbs",
   })
);

//middlewares nesesarios para el funcionamiento de express
app.use(express.json({}));
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

//inicializacion de la base de datos
//db.connect();

//llamado a las rutas
app.use("/", users);

//inicializacion del servidor
app.listen(port, () => console.log(`Servidor correindo en el puerto ${port}`));
