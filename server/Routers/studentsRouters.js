import express from 'express'
import db from '../dbConnections.js'

const router = express.Router();

router.get ("/", (req, res) => {
    res.send("Student Router")
})

router.get ("/:id",async (req, res) => {
    let result = await db.query ("SELECT * FROM students")
    console.log (result)
    res.send("Student Router 1")
})


export default router;