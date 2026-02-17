import express from 'express'
import db from '../dbConnections.js'



const router = express.Router()

router.post ("/", async (req, res) => {
    console.log ('method:' , req.method)
    let userName = req.body.username
    let password = req.body.password
    console.log (userName, password)
    let result = await db.query ("INSERT INTO users (username, password) VALUES (?,?)", [userName, password])
    let [response] = await db.query ('SELECT * FROM users WHERE userName="Michael" AND password="password123"' , [userName, password])
    console.log (response)  
    res.send ("User added successfully")
})

export default router;