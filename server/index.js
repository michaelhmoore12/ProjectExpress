import express from 'express'
import cors from 'cors'
import db from './dbConnections.js'


const server = express();
server.use (cors("localhost://3000"));

server.get ("/", (req, res) => {
    res.send("The server is up and running")
})
//root
server.get ("/students", (req, res)      => {
req.send ("Get students sent")
})
//students
server.get ("/courses", (req, res)      => {
    res.send ("Get courses sent")
})
//courses
server.post ("/students", async (req, res) => { 
    res.send ("Post students sent")
})

server.listen(4000, () => {
    console.log("Server is running on port 4000")
})