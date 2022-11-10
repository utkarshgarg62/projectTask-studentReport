import React, { useState } from "react"
import axios from "axios"

const Edit = () => {


    const [studentId, setStudentId] = useState("");
    const [result, setResult] = useState("");

    const handle = async (e) => {
        e.preventDefault()
        try {
            let response = await axios.delete("http://localhost:5000/delete", {
                studentId: studentId
            })
            setResult("Success")
            console.log(response)
            console.log("Sucess")
        }
        catch (err) {
            console.log(err)
            console.log("Unsucess")
        }
    }

    return <div>
        <div className="login-page">
            <div className="form">
                <h2>Delete Student</h2>
                <form className="login-form"
                    onSubmit={handle}
                    method="POST">
                    {result !== "" && <div className="alert alert-success" role="alert">{result}</div>}
                    <span>StudentId</span><input type="text" placeholder="studentId" name="studentId"
                        value={studentId} onChange={(e) => setStudentId(e.target.value)}
                    />
                    <button>Submit</button>
                </form>
            </div>
        </div>

    </div>

}
export default Edit