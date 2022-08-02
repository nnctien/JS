const homeRouter = require('./homeRouter')
const productRouter = require('./productRouter')
const userRouter = require('./userRouter')
const shopRouter = require('./shopRouter')

function route(app){
    
    //Home Router:
    app.use('/', homeRouter)
    app.use('/check', homeRouter)
    //
    app.use('/product', productRouter)
    app.use('/shop', shopRouter)
    //
    app.use('/register',userRouter)
}
module.exports = route
