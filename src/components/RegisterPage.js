import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios"
import "./style.css"

const api = "http://localhost:5000/studentregister";

const RegisterPage = () => {
    let navigate = useNavigate();

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [result, setResult] = useState("")
    const [isError, setIsError] = useState("")

    const handle = async (e) => {
        e.preventDefault()
        try {
            let response = await axios.post(api, {
                name: name,
                email: email,
                password: password
            })
            setTimeout(function () {
                navigate("/login", { replace: true });
            }, 3000);
            console.log(response)
            setResult("Success.. redirecting to login page")
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

        <div className="login-page">
            <div className="form">
                <h2>Register Page</h2>
                {result !== "" && <div className="alert alert-success" role="alert">{result}</div>}
                {isError !== "" && <div className="alert alert-danger" role="alert">{isError.message}</div>}
                <form className="login-form" onSubmit={handle} method="POST">
                    <input type="text" placeholder="Enter Name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="text" placeholder="Enter Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Enter Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button>login</button>
                </form>
            </div>
        </div>
    </div >
}
export default RegisterPage;