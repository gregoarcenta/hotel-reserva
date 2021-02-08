const express = require("express");
const path = require("path");
const hbs = require("express-handlebars");
const session = require("express-session");
const flash = require("connect-flash");

const home = require("./routes/home");
const auth = require("./routes/auth");
const users = require("./routes/register");
const reservas = require("./routes/reservas");

const db = require("./config/database");
require("dotenv").config();

//Initializations
const app = express();
//db.connect();

//Globals variables

//Settings
app.set("port", process.env.PORT || 3000);
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

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(
   session({
      secret: process.env.CK_SECRET,
      resave: true,
      saveUninitialized: true,
   })
);
app.use(flash());

//Routes
app.use("/", home);
app.use("/login", auth);
app.use("/register", users);
app.use("/reservas", reservas);

//Server Initializatión
app.listen(app.get("port"), () =>
   console.log(`Servidor correindo en el puerto ${app.get("port")}`)
);
