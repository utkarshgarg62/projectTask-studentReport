import React from "react"
import { useState, useEffect } from "react";
import axios from "axios"
const api = "http://localhost:5000/report"

const Report = () => {
    const [studentList, setStudentList] = useState();

    useEffect(() => {
        if (!studentList) {
            axios.get(api).then((response) => {
                console.log(response.data.data);
                setStudentList(response.data.data);
            });
        }
    });

    return <div>
        <table id="customers">
            <tr>
                <td>index</td>
                <td>student name</td>
                <td>email</td>
                <td>Physics</td>
                <td>Chemistry</td>
                <td>Maths</td>
                <td>English</td>
                <td>Computer</td>
                <td>P.ed</td>
                <td><button>Edit</button><button>Delete</button></td>
            </tr>
        </table>
        <h1>Student Lists</h1>
        {studentList && studentList.length > 0 && (
            <table id="customers">
                <tr>
                    <th>S.No.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Physics</th>
                    <th>Chemistry</th>
                    <th>Maths</th>
                    <th>English</th>
                    <th>Computer</th>
                    <th>P.ed</th>
                </tr>
                {studentList.map((student, index) => (

                    <tr>
                        <td>{index + 1}</td>
                        <td>{student.name}</td>
                        <td>{student.email}</td>
                        <td>{index + 1}</td>
                        <td>{index + 1}</td>
                        <td>{index + 1}</td>
                        <td>{index + 1}</td>
                        <td>{index + 1}</td>
                        <td>{index + 1}</td>
                        {/* <td>{student.Physics}</td>
                        <td>{student.Chemistry}</td>
                        <td>{student.Maths}</td>
                        <td>{student.English}</td>
                        <td>{student.P.ed}</td> */}
                    </tr>
                ))}
            </table>
        )}
    </div>
}
export default Report;