const mongoose = require('mongoose');
async function connect() {
    await mongoose.connect('mongodb://localhost/my_database');
}
module.exports = {connect}