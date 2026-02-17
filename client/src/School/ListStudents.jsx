import React , { useEffect, useState} from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table';

export default function ListStudents() {

    useEffect (() => {
        async function fetchStudents () {
        let response = await axios.get ("http://localhost:4000/students")
        console.log (response)
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
            </tbody>
        </Table>
    )
}