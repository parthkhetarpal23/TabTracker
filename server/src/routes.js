// all routes in one place
const AuthenticationController = require('./controllers/AuthenticationController') 
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
// BEFORE

// // exports a function
// module.exports = (app) => {
// // simple endpoint to check server
//  // define routes in express: give it method you want to use eg: get post put patch delete
//  app.post('/register', (req,res) => {   //app.<name of command> status endpoint
//     res.send({                          // once we get a request on the server, we can send back message.
//         message:`Hello ${req.body.email} !, you have been registered successfully.`
//     })
//     })
// }
// AFTER KEEPING ENDPOINTS SEPERATE FROM ROUTES.
module.exports = (app) => {
     app.post('/register',      // Hits this endpoint and calls middleware function.
      AuthenticationControllerPolicy.register, // when this function calls next, it will go to the nextline.
      AuthenticationController.register)
    }
    