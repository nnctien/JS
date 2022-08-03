const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/RenaeShop_prod'); 
        console.log('Connect Sucessfully!') 
    } catch (error) {
        console.log('Failed tp connect to database!') 
    }
 
}
module.exports = {connect}