import React from "react"
import { useState, useEffect } from "react";
import cookies from "js-cookie";
import axios from "axios"
// const api = "http://localhost:5000/report/"


const Report = () => {
    let studentId = cookies.get("id")

    const [studentData, setStudentData] = useState("");

    useEffect(() => {
        if (!studentData) {
            axios.get(`http://localhost:5000/report/${studentId}`).then((response) => {
                console.log(response.data.data);
                setStudentData(response.data.data);
            });
        }
    });
    console.log(studentData)

    return <div>
        <table id="customers">
            <tr>
                <td>{studentData._id}</td>
                <td>{studentData.name}</td>
                <td>{studentData.email}</td>
                <td>{studentData.password}</td>
                <td>Physics</td>
                <td>Chemistry</td>
                <td>Maths</td>
                <td>English</td>
                <td>Computer</td>
                <td>P.ed</td>
                <td><button>Edit</button><button>Delete</button></td>
            </tr>
        </table>
    </div>
}
export default Report;