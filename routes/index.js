const homeRouter = require('./homeRouter');
const productRouter = require('./productRouter');
const userRouter = require('./userRouter');
const shopRouter = require('./shopRouter');

function route(app) {
    app.use('/product', productRouter);
    app.use('/shop', shopRouter);
    app.use('/register',userRouter);
    app.use('/', homeRouter);

};

module.exports = route;
