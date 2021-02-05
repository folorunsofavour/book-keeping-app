const express = require('express');
const dotenv = require('dotenv');
const routes = require('./routes/router');
const error = require('./middlewares/errorMiddlewareHandler');
// const dbConnect = require('./config/dbConnect');


dotenv.config();
require('./config/dbConnect')();
const app = express();

// Passing body data
app.use(express.json());

// dbConnect
// dbConnect();

app.use('/api', routes);
// console.log(process.env);
app.use(error.errorMiddlewareHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is up and running on Port: ${PORT}`);
});

