
const homeRouter = require('./homeRouter');
const shopRouter = require('./shopRouter');
const userRouter = require('./userRouter');
const productRouter = require('./productRouter');
const blogRouter = require('./blogRouter');
const contactRouter = require('./contactRouter');
const shopcartRouter = require('./shopcartRouter');
const addNewProduct = require('./addNewProductRouter');
function route(app) {
    app.use('/product', productRouter);
    app.use('/shop', shopRouter);
    app.use('/register',userRouter);
    app.use('/blog', blogRouter);
    app.use('/contact', contactRouter);
    app.use('/shopcart', shopcartRouter);
    app.use('/add', addNewProduct);
    app.use('/', homeRouter);

};

module.exports = route;
