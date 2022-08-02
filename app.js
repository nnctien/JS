const path = require("path");
const express = require('express');
const morgan = require('morgan');
const exphbs  = require('express-handlebars');
const mongoose = require("./ulti/mongoose");
const port = 3000;
const app = express();
//Routes:

const route = require('./routes');
//const homeRouter = require('./routes/homeRouter');

app.use(express.urlencoded());
app.use(express.json());

//Morgan HTTP logger:
app.use(morgan('combined'));
//Static:
app.use(express.static(path.join(__dirname, "public")));
//Template engine:

app.engine('.hbs', exphbs.engine({
  extname: '.hbs',
  partialsDir:__dirname + '/views/partials',
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, "views"));

//route:
//connect to database:
route(app);

//Demo using local host
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
})