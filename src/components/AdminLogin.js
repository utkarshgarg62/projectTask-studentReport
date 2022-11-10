import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios"
import "./style.css"
import cookie from "js-cookie"

const api = "http://localhost:5000/adminlogin";

const AdminLogin = () => {
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
            setResult("Succes")
            let adminId = response.data.data.adminId
            let token = response.data.data.token
            cookie.set("id", adminId)
            cookie.set("token", token)
            console.log("Sucess")
        }
        catch (err) {
            console.log("Unsucess")

            setIsError(err.response.data)
        }

    }

    return <div>
        <div className="login-page">
            <div className="form">
                <h2>Admin Login</h2>
                {result !== "" && <div className="alert alert-success" role="alert">{result}</div>}
                {isError !== "" && <div className="alert alert-danger" role="alert">{isError.message}</div>}
                <form className="login-form" onSubmit={handle} method="POST">
                    <input type="text" placeholder="Enter Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Enter Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button>login</button>
                </form>
            </div>
        </div>
    </div>
}
export default AdminLogin;