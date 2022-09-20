// for the database connection
const Pool = require('pg').Pool;
const pool = new Pool({
    user:"postgres",
    host:"172.21.0.2",
    database: "students",
    password:"test",
    port : 5432,
});

module.exports = pool;