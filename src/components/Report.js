import React from "react"
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios"
const api = "http://localhost:5000/report"


const Report = () => {
    // let studentId = cookies.get("id")
    // console.log(studentId)

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
        <h1>Student Lists</h1>
        {studentList && studentList.length > 0 && (
            <table id="student">
                <tr>
                    <th>S.No.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Physics</th>
                    <th>Chemistry</th>
                    <th>Maths</th>
                    <th>English</th>
                    <th>Computer</th>
                    <th></th>
                </tr>
                {studentList.map((student, index) => (

                    <tr>
                        <td>{index + 1}</td>
                        <td>{student.name}</td>
                        <td>{student.email}</td>
                        <td>{student.physics}</td>
                        <td>{student.chemistry}</td>
                        <td>{student.maths}</td>
                        <td>{student.english}</td>
                        <td>{student.computer}</td>
                        <td><NavLink to="/edit">Edit</NavLink></td>
                    </tr>
                ))}
            </table>
        )}
    </div>
}
export default Report;