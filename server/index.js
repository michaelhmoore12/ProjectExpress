import express from 'express'
import cors from 'cors'

const server = express();

server.get ("/", (req, res) => {
    res.send("The server is up and running")
})

server.listen(4000, () => {
    console.log("Server is running on port 4000")
})