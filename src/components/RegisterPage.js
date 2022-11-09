import React, { useState } from "react"
import axios from "axios"
import "./style.css"

const api = "http://localhost:5000/studentregister";

const RegisterPage = () => {

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
            console.log(response)
            setResult("Success")
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
            <h1>RegisterPage</h1>
            <div class="container">

                {result !== "" && <div class="alert alert-success" role="alert">{result}</div>}
                {isError !== "" && <div class="alert alert-danger" role="alert">{isError.message}</div>}
                <label for="name"><b>Name</b></label>
                <br></br>
                <input type="text" placeholder="Enter Name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                <br></br>
                <label for="email"><b>Email</b></label>
                <br></br>
                <input type="text" placeholder="Enter Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <br></br>
                <label for="psw"><b>Password</b></label>
                <br></br>
                <input type="password" placeholder="Enter Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <br></br>
                <button>Register</button>
            </div>
        </form >
    </div >
}
export default RegisterPage;