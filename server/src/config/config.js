module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'tabtracker', // DB name env var
        user: process.env.DB_USER || 'tabtracker',
        password: process.env.DB_PASS || 'tabtracker',
        options: {
            dialect: process.env.DIALECT || 'sqlite', // useful options in sequelize to tell what type of db you are connecting to
            host: process.env.HOST || 'localhost', // telling sqlite location of db you are connecting to
            storage: './tabtracker.sqlite' // where to store sqlite file
        }
    }
}
