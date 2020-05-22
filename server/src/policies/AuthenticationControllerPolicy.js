// express middleware that valid data constraints for pass fail
// joi framework used for validating request.body, req.query or req.parameters

const Joi = require('joi')
module.exports = {
    register (req, res, next) { // export name of exact same method used in controller
        const schema = {
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            )
        }
        // defined schema, now use it.
        
        const {error, value} = Joi.validate(req.body,schema) // validate(<what you want to validate>,<what to validate against>)
        if(error) {
            switch (error.details[0].context.key) {
                case 'email':
                    res.status(400).send({
                        error: `You must have a valid email address`
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: `Password provided failed the following rules: 
                        <br>1. Only upper case, lower case and nums allowed. 
                        <br>2. Length between 8-32
                        `
                    })
                    break
                default:
                    res.status(400).send({
                        error: `Invalid registration info`
                    })
            }
        }
        else {
            next()
        }
        
        
    }
    
        
}