const express = require("express");
const bodyParser = require("body-parser");

//importing our routes.
const testRoute = require("./routes/test");

//defining our app.
const app = express();

//defining our initial settings.
const port = 4000;
app.set('port', process.env.PORT || port);

//using our middlewares.
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));


//using our routes.
app.use('/api', testRoute);

module.exports = app;