import React from "react"
import { useState, useEffect } from "react";
import cookies from "js-cookie";
import axios from "axios"
import "./studentReport.css"

const Report = () => {
    let studentId = cookies.get("id")

    const [studentData, setStudentData] = useState("");

    useEffect(() => {
        if (!studentData) {
            axios.get(`http://localhost:5000/reports/${studentId}`).then((response) => {
                console.log(response.data.data);
                setStudentData(response.data.data);
            });
        }
    });
    console.log(studentData)

    return <div>
        <br></br>
        <br></br>
        <br></br>
        <table id="studentReport" className="container">
            <tr>
                <th>Student Id</th>
                <th>Name</th>
                <th>Email</th>
                <th colSpan="5">Subjects</th>
                {/* <th></th> */}
            </tr>
            <tr>
                <td>{studentData._id}</td>
                <td>{studentData.name}</td>
                <td>{studentData.email}</td>
                <td>Physics - {studentData.physics}</td>
                <td>Chemistry - {studentData.chemistry}</td>
                <td>Maths - {studentData.maths}</td>
                <td>English - {studentData.english}</td>
                <td>Computer - {studentData.computer}</td>
                {/* <td><button>Edit</button><button>Delete</button></td> */}
            </tr>
        </table>
    </div>
}
export default Report;