// exports all routes that should be associated with authentication

// implementing logic to create using model and save to db when someone hits register end point.
// User passes email and password in payload of json. req.body has email and password.
// create a new user record and store it into the db whenever someone hits this end point.

const {User} = require('../models')
module.exports = {
    async register (req,res) {
        try{
            const user = await User.create(req.body)
            res.send(user.toJSON()) // send back user object to the client requesting end point.
        }
        catch (err) {
            res.status(400).send({
                error: 'This email is already in use.'
            })
        }
    }

}