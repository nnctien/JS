const path = require("path");
//
const express = require('express');
const app = express();
const morgan = require('morgan');
const exphbs  = require('express-handlebars');
const port = 3000;
//Morgan HTTP logger:
app.use(morgan('combined'));

//Template engine:

app.engine('.hbs', exphbs.engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, "views"));

//route:
app.get("/", (req, res) => {
	res.render("shop");
});
//Demo local host
app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
})