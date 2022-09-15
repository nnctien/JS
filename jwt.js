require("dotenv").config();

var jwt = require("jsonwebtoken");
var privateKey = "goaway";
const accessTokenLife = process.env.ACCESS_TOKEN_LIFE;
const accessTokenSecret =
  process.env.ACCESS_TOKEN_SECRET ||
  "access-token-secret-example-trungquandev.com-green-cat-a@";
console.log(accessTokenLife);
