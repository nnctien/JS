require("dotenv").config();
const path = require("path");
const express = require("express");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
var methodOverride = require("method-override");
const port = 3000;
const app = express();
const route = require("./routes");
const db = require("./db");
//
app.use(express.urlencoded());
app.use(express.json());
app.use(methodOverride("_method"));
app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "public")));
//Connect to Mongodb:
db.connect();
//Passport.js:
const passport = require("./passpost");
const session = require("express-session");
const store = session.MemoryStore();
app.use(
  session({
    saveUninitialized: false,
    secret: process.env.KEY_SESSION,
    cookie: {
      maxAge: Number(process.env.ACCESS_LIFE),
    },
    store,
  })
);
app.use(passport.initialize());
app.use(passport.session());

//Template engine:
var hbs = exphbs.create({
  helpers: {
    inc: function (value, options) {
      return parseInt(value) + 1;
    },
  },
});
app.engine(
  ".hbs",
  exphbs.engine({
    extname: ".hbs",
    partialsDir: __dirname + "/views/partials",
  })
);
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "views"));
//Routes:
route(app);

//Demo using local host
app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`);
});
