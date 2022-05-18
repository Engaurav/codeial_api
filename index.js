const express = require('express');
const app = express();
const cors = require('cors')

const db = require('./config/mongoose')

const MongoStore = require('connect-mongo');


app.use(cors());
app.use('/', require('./routes'));

app.listen(process.env.PORT || 8000, function(err) {
    if (err) {
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port 8080: ${process.env.PORT}`);
});