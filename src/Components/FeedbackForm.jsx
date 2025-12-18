import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const FeedbackForm = () => {
  const navigate =useNavigate()
  const { user } = useContext(UserContext);

  const handleSubmit =()=>{
  navigate("/user")
  }

  return (
    <div className="container mt-4">
      <h2>Welcome, {user.username}</h2>

      <form className="mt-4" onSubmit={handleSubmit}>

        {/* Username */}
        <div className="mb-3">
          <label className="form-label"><b>Username</b></label>
          <input
            type="text"
            className="form-control"
            value={user.username}
            readOnly
          />
        </div>

        {/* Password */}
        <div className="mb-3">
          <label className="form-label"><b>Password</b></label>
          <input
            type="password"
            className="form-control"
            value={user.password}
            readOnly
          />
        </div>

        {/* Feedback */}
        <div className="mb-3">
          <label className="form-label"><b>Your Feedback</b></label>
          <textarea
            className="form-control"
            rows="4"
            placeholder="Enter your feedback here..."
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
