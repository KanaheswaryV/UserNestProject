import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import { useNavigate } from "react-router-dom";

const User = () => {

  const navigate = useNavigate()

  const [userList, setUserList] = useState([]);

  //Items per page
  const [skip, setSkip] = useState(0)
 
  const getUsers = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/users?limit=10&skip=${skip}`);
      const data = await response.json();
      setUserList(data.users);
    } catch (e) {
      console.log("Error fetching users", e);
    }
  };

  useEffect(() => {
    getUsers();
  }, [skip]);

  return (
    <>
      <Header />

      <div style={{ display: "flex" }}>
        <Sidebar />

        <div style={{ marginLeft: "220px", width: "100%" }}>
          <div className="container mt-4">
            <h2 className="text-primary mb-3">User List</h2>

            <table className="table table-bordered table-striped table-hover">
              <thead className="table-dark">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Blood</th>
                  <th>Eye</th>
                  <th>Hair</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {userList.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.firstName} {user.lastName}</td>
                    <td>{user.age}</td>
                    <td>{user.gender}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.bloodGroup}</td>
                    <td>{user.eyeColor}</td>
                    <td>{user.hair.color} ({user.hair.type})</td>
                    <td><button className="btn btn-info btn-sm" onClick={() => navigate(`/user/${user.id}`)}>View</button>
                    <button className="btn btn-info btn-sm" onClick={() => navigate(`/edit-user/${user.id}`)}>Edit</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        <div className="d-flex justify-content-end gap-2 mt-3">
        <button className="btn btn-primary" onClick={() => setSkip(skip - 10)}
          disabled={skip === 0}
        >
          Previous
        </button>
        <button className="btn btn-primary" onClick={() => setSkip(skip + 10)}>
          Next
        </button>
      </div>
        </div>

      </div>

      <Footer />
    </>
  );
};

export default User;
