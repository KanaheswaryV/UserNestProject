import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // const location = useLocation()
  // console.log(location)

  const [user, setUser] = useState({firstName: "", lastName: "", email: "", phone: ""
  });

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [id]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dummy JSON UPDATE request
    fetch(`https://dummyjson.com/users/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        alert("User Updated Successfully!");
        navigate("/user");
      });
  };

  return (
    <div className="container mt-4">
      <h2>Edit User - {user.firstName}</h2>

      <form onSubmit={handleSubmit} className="mt-3">

        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input name="firstName" className="form-control" value={user.firstName} onChange={handleChange} required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input name="lastName" className="form-control" value={user.lastName} onChange={handleChange} required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input name="email" className="form-control" value={user.email} onChange={handleChange} required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input name="phone" className="form-control" value={user.phone} onChange={handleChange} required
          />
        </div>

        <button type="submit" className="btn btn-primary">Save Changes</button>
      </form>
    </div>
  );
};

export default EditUser;
