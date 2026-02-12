import mysql from 'mysql2/promise'

let db

try {
db = await mysql.createConnection ( {
    host: 'localhost',
    user: 'root',
    password: 'Emilia0113!',
    database: 'schoolDB'
    } )
    console.log ("Connected to MySQL database successfully!  :)  ")
}
catch (error) {
    console.log ("error connecting to database")
}





export default db;