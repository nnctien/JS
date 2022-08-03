const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/RenaeShop_prod'); 
        console.log('Connect successfully!') 
    } catch (error) {
        console.log('Failed to connect to database!') 
    }
 
}
module.exports = {connect}