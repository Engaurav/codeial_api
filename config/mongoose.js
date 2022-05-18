const mongoose = require('mongoose');

// mongodb://localhost/
mongoose.connect(`mongodb+srv://gauravsingh323:8OlAFfvtjlWq4gYt@cluster0.guddo.mongodb.net/codeial_production`);

const db = mongoose.connection;

db.on('err',console.error.bind(console,'Error in Connection of DB'));

db.once('open',function(){
    console.log('Connected to Database');
});

module.exports = db;