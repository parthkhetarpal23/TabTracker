// used for connecting to our database. loads in a couple of config defined in config.

const fs = require('fs') // nodejs way of reading through file system
const path = require('path') // used for dealing with relative paths and absolute paths. Used in conjcution with fs
const Sequelize = require('sequelize') // Sequelize model. Needed to create sequelize obj and connect to db
const config = require('../config/config')
const db = {}

const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options
)

// short functionality to automaticallyu read through all models in model folder and set it up to be user sequelized

fs.readdirSync(__dirname) // read through current directory and give an array of diff files
.filter ( (file) => // filter out any file that is equivalent to index.js ie do not want index file but every other model file
file !== 'index.js'
)
.forEach((file) => { // for each file found, declare a model
    const model = sequelize.import(path.join(__dirname,file)) // tell sequelize to import it
    db[model.name] = model // db.User = model
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db