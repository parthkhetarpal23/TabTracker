const express = require('express'); // dive into node_module include the main file for express
const bodyParser = require('body-parser'); // process data very easily
const cors = require('cors');
const morgan = require('morgan'); // logs printed out
const {sequelize} = require('./models') // have a models folder which has an index.js file that returns obj that has sequelize attr
const config = require('./config/config')
const app = express() //build an express server. basic webapp to build rest endpoints

app.use(morgan('combined')) // check documentation, used to print out logs a certain way. 
app.use(bodyParser.json()) // allow express app to easily parse any json request sent in
app.use(cors()) // need cors if you need server to be hosted on any domain and clients can hit the server from anywhere.

require('./routes')(app) // pass an app and attach all endpoints onto the express app variable

// connect sequelize to whatever database you have configured for and create tables if they don't exist and get everything ready to go
sequelize.sync ().then (() => {
    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
})


// server running on 8081, handling end pont /status. When it gets a request, in sends back a json object with attribute message:
// default req on chrome, is a get.
// app.listen(process.env.PORT || 8081);


