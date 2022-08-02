const homeRouter = require('./homeRouter')
const productRouter = require('./productRouter')
const userRouter = require('./userRouter')

function route(app){
    
    //Home Router:
    app.use('/', homeRouter)
    app.use('/check', homeRouter)
    //
    app.use('/product', productRouter)
    //
    app.use('/register',userRouter)
}
module.exports = route