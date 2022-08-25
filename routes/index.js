const homeRouter = require("./homeRouter");
const shopRouter = require("./shopRouter");
const registerRouter = require("./registerRouter");
const loginRouter = require("./loginRouter");
const productRouter = require("./productRouter");
const blogRouter = require("./blogRouter");
const contactRouter = require("./contactRouter");
const shopcartRouter = require("./shopcartRouter");
const adminRouter = require("./adminRouter");
const orderRouter = require("./orderRouter");
const authRouter = require("./authRouter");
function route(app) {
  app.use("/product", productRouter);
  app.use("/shop", shopRouter);
  app.use("/register", registerRouter);
  app.use("/login", loginRouter);
  app.use("/blog", blogRouter);
  app.use("/contact", contactRouter);
  app.use("/shopcart", shopcartRouter);
  app.use("/admin", adminRouter);
  app.use("/order", orderRouter);
  app.use("/", homeRouter);
}

module.exports = route;
