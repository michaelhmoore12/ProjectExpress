import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function Login() {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })
}

function handleChange (event) {
    let inputName = event.target.name
    let inputValue = event.target.value
    setFormData({...formData, [inputName]: inputValue })
}

async function handleSubmit(event) {
    event.preventDefault()
    console.log(formData)
    const response = await axios.post ("http://localhost:4000/users/login", formData)
    console.log(response.data)
    response.data.length == 0


    return (
        <Form autoComplete='off'>
            <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" name="username" placeholder="Enter username" onChange={(event)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="password" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>
    )
}

export default Login