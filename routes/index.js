
const homeRouter = require('./homeRouter');
const shopRouter = require('./shopRouter');
const userRouter = require('./userRouter');
const productRouter = require('./productRouter');

function route(app) {
    app.use('/product', productRouter);
    app.use('/shop', shopRouter);
    app.use('/register',userRouter);
    app.use('/', homeRouter);

};

module.exports = route;
