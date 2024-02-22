// import React from 'react'
import {Link} from "react-router-dom"

const Login = () => {
    const [FullName, setFullName] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")



    return (


        <div className="w-full">
            <h1 className="text-primary text-center fs-2">Log In</h1>
            <div className="col-10 col-md-8 col-lg-6 mx-auto">
                <form action="" className=" mx-auto shadow p-4 ml-5" style={{ width: "500px", }}>
                    <input type="email" placeholder="Enter Email" className="form-control my-2" />
                    <input type="password" onChange={(ev) => setEmail (ev.target.value)} placeholder="Enter Password" className="form-control my-2" />
                    <p>Don't have an account <Link to="/sign-up">Sign Up</Link></p>
                    <button type="submit" className="btn btn-primary">Log In</button>
                </form>
            </div>
        </div>
    )
}

export default Login