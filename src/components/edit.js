import React, {
    useState,
} from "react"
import axios from "axios"

const Edit = () => {


    const [studentId, setStudentId] = useState();
    const [physics, setPhysics] = useState("0");
    const [chemistry, setChemistry] = useState("0");
    const [maths, setMaths] = useState("0");
    const [english, setEnglish] = useState("0");
    const [computer, setComputer] = useState("0");

    const handle = async (e) => {
        e.preventDefault()
        try {
            let response = await axios.put("http://localhost:5000/update", {
                studentId: studentId,
                physics: physics,
                chemistry: chemistry,
                maths: maths,
                english: english,
                computer: computer
            })
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
                <h2>Edit</h2>
                <form className="login-form"
                    onSubmit={handle}
                    method="POST">
                    <span>StudentId</span><input type="text" placeholder="studentId" name="studentId"
                        value={studentId} onChange={(e) => setStudentId(e.target.value)}
                    />
                    <span>Physics</span><input type="text" placeholder="physics" name="physics"
                        value={physics} onChange={(e) => setPhysics(e.target.value)}
                    />
                    <span>Chemistry</span><input type="text" placeholder="chemistry" name="chemistry"
                        value={chemistry} onChange={(e) => setChemistry(e.target.value)}
                    />
                    <span>Maths</span><input type="text" placeholder="maths" name="maths"
                        value={maths} onChange={(e) => setMaths(e.target.value)}
                    />
                    <span>English</span><input type="text" placeholder="english" name="english"
                        value={english} onChange={(e) => setEnglish(e.target.value)}
                    />
                    <span>Computer</span><input type="text" placeholder="computer" name="computer"
                        value={computer} onChange={(e) => setComputer(e.target.value)}
                    />
                    <button>Submit</button>
                </form>
            </div>
        </div>

    </div>

}
export default Edit