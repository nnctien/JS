const path = require("path");
//
const express = require('express');
const app = express();
const morgan = require('morgan');
const exphbs  = require('express-handlebars');
const port = 3000;

app.use(express.urlencoded());
app.use(express.json());

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
	res.render("home");
});
app.get("/shop", (req, res) => {
	res.render("shop");
});
app.get("/product", (req, res) => {
	res.render("product-details");
});
app.get("/search", (req, res) => {
	res.render("search");
});

app.get("/register", (req, res) => {
	res.render("register");
});
app.post("/register", (req, res) => {
	res.send("");
});

//Demo using local host
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
})