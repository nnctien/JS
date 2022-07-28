const path = require("path");
//
const express = require('express');
const app = express();
const morgan = require('morgan');
const exphbs  = require('express-handlebars');
const port = 3000;
//Morgan HTTP logger:
app.use(morgan('combined'));
//Static:
app.use(express.static(path.join(__dirname, "public")));
//Template engine:
//exphbs.registerPartials(__dirname + '/views/partials');

app.engine('.hbs', exphbs.engine({
  extname: '.hbs',
  partialsDir:__dirname + '/views/partials',
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, "views"));

//route:
app.get("/", (req, res) => {
	res.render("home", layout: 'homeside');
});
app.get("/shop", (req, res) => {
	res.render("shop");
});
app.get("/product", (req, res) => {
	res.render("product-details");
});
//Demo local host
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
})