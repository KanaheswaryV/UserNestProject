import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../context/UserContext';
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"

const Login = () => {
const navigate =useNavigate()
//const {setUser} = useContext(UserContext)
const {dispatch} = useContext(UserContext)

const [username, setUsername] = useState("")
const [password, setPassword] = useState("")

const handleSubmit =(e)=>{
e.preventDefault()

// setUser({
//   username : username,
//   password: password
// })

dispatch({
  type: "LOGIN",
  payload: {
    username,
    password
  }
})

alert("Form submitted")

navigate("/feedback")
}

  return (
    <div>
      <div
      style={{
        height: "100vh",
        backgroundImage: "url('/Images/UserNestAppImage2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="p-4 shadow-lg bg-white rounded"
        style={{ width: "350px" }}
      >
        <h3 className="text-center mb-4">Login</h3>

    <form onSubmit={handleSubmit} className="w-100 d-flex justify-content-center mt-5">

      <div className="card p-4" style={{ width: "400px" }}>

        {/* Username */}
        <div className="mb-3">
          <label className="form-label"><b>Username</b></label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} required
          />
        </div>

        {/* Password */}
        <div className="mb-3">
          <label className="form-label"><b>Password</b></label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Login</button>
      </div>
    </form>
      </div>
    </div>
    </div>
  );
}

export default Login