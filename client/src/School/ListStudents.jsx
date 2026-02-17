import React , { useEffect, useState} from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table';

export default function ListStudents() {

    const [students, setStudents] = useState([
        {
        firstName: "",
        lastName: "",
        email: ""
        }
    ])

    useEffect (() => {
        async function fetchStudents () {
        let response = await axios.get ("http://localhost:4000/students")
        console.log (response)
        setStudents (response.data)
        console.log (students)
        }
        fetchStudents()
    } , [])


    return (
        <Table striped>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>


                <tr>
                    <td>Michael</td>
                    <td>Moore</td>
                    <td>mikeyhm12@icloud.com</td>   
                </tr>
                {students.map ((student) => {
                  <tr>
                    <td>{student.firstName}</td>
                    <td>{student.lastName}</td>
                    <td>{student.email}</td>   
                </tr>
                })}
            </tbody>
        </Table>
    )
}