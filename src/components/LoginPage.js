import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios"
import "./style.css"

const api = "http://localhost:5000/studentlogin";

const LoginPage = () => {
    let navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [result, setResult] = useState("")
    const [isError, setIsError] = useState("")

    const handle = async (e) => {
        e.preventDefault()
        try {
            let response = await axios.post(api, {
                email: email,
                password: password
            })
            setTimeout(function () {
                navigate("/reports", { replace: true });
            }, 3000);
            setResult(response.data)
            console.log("Sucess")
        }
        catch (err) {
            console.log("Unsucess")
            console.log(err.response.data)
            setIsError(err.response.data)
        }

    }
    console.log(result)

    return <div>
        <form method="POST" onSubmit={handle} style={{ border: "1px solid #ccc" }}>
            <h1>LoginPage</h1>
            <div class="container">
                {result !== "" && <div class="alert alert-success" role="alert">student id - {result.data.studentId}</div>}
                {isError !== "" && <div class="alert alert-danger" role="alert">{isError.message}</div>}
                <label for="email"><b>Email</b></label>
                <br></br>
                <input type="text" placeholder="Enter Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <br></br>
                <label for="psw"><b>Password</b></label>
                <br></br>
                <input type="password" placeholder="Enter Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <br></br>
                <button>Login</button>
            </div>
        </form>
    </div>
}
export default LoginPage;