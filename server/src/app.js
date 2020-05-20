const express = require('express'); //dive into node_module include the main file for express
const bodyParser = require('body-parser'); //process data very easily
const cors = require('cors');
const morgan = require('morgan'); //logs printed out

const app = express(); //build an express server. basic webapp to build rest endpoints

app.use(morgan('combined')) // check documentation, used to print out logs a certain way. 
app.use(bodyParser.json()) // allow express app to easily parse any json request sent in
app.use(cors()) // need cors if you need server to be hosted on any domain and clients can hit the server from anywhere.

// simple endpoint to check server
 // define routes in express: give it method you want to use eg: get post put patch delete
app.get('/status', (req,res) => {   //app.<name of command> status endpoint
res.send({                          // once we get a request on the server, we can send back message.
    message : 'hello world!!'
})
})

//server running on 8081, handling end pont /status. When it gets a request, in sends back a json object with attribute message:
//default req on chrome, is a get.
app.listen(process.env.PORT || 8081);


