var jwt = require("jsonwebtoken");
var privateKey = "goaway";
jwt.sign(
  { foo: "bar" },
  privateKey,
  { algorithm: "RS256" },
  function (err, token) {
    console.log(token);
    return token;
  }
);
