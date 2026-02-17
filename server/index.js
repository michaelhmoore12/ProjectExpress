import express from 'express'
import cors from 'cors'
import studentRouter from './Routers/studentsRouters.js'
import coursesRouter from './Routers/coursesRouter.js'
import userRouter from './Routers/userRouters.js'

const server = express();
server.use (express.json());
server.use (cors("localhost://3000"));

// http://localhost:4000/students/
//http://localhost:4000/students/1
server.use ("/students", studentsRouter)
server.use ("/courses", coursesRouter)
server.use ("/users", userRouter)

server.get ("/", (req, res) => {
    res.send("The server is up and running")
})
//root

