// User model. 
// user.js is file that exports a function that takes sequelize, datatype
module.exports = (sequelize, DataTypes) => sequelize.define('User', { //sequelize.define (<name of model>,) // used for storing user related info
    // second arg are options or attr that are attached to table/model.
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    password: DataTypes.STRING
})