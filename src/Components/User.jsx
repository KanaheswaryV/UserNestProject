import React, { useEffect, useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import * as bootstrap from "bootstrap";

//import UserContext from "../context/UserContext";

const User = () => {
  //const {user, setUser} = useContext(UserContext)

  const [deleteId, setDeleteId] = useState(null);

  const navigate = useNavigate();

  const [userList, setUserList] = useState([]);

  //Items per page
  const [skip, setSkip] = useState(0);

  const getUsers = async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/users?limit=10&skip=${skip}`
      );
      const data = await response.json();
      setUserList(data.users);
    } catch (e) {
      console.log("Error fetching users", e);
    }
  };

  useEffect(() => {
    getUsers();
  }, [skip]);

  // const handleDelete = async (id) => {
  //   const confirm = window.confirm(
  //     "Are you sure you want to delete this user?"
  //   );
  //   if (!confirm) return;

  //   try {
  //     const res = await fetch(`https://dummyjson.com/users/${id}`, {
  //       method: "DELETE",
  //     });

  //     const data = await res.json();
  //     console.log("Deleted user: ", data);
  //     // 2️⃣ Update UI
  //     setUserList((prev) => prev.filter((user) => user.id !== id));

  //     alert("User deleted successfully!");
  //   } catch (error) {
  //     console.error("Error deleting user:", error);
  //   }
  // };
  
const handleConfirmDelete = async () => {
  try {
    await fetch(`https://dummyjson.com/users/${deleteId}`, {
      method: "DELETE",
    });

    setUserList(prev => prev.filter(user => user.id !== deleteId));

    // Close modal properly
    const modalEl = document.getElementById("deleteModal");
    const modal = bootstrap.Modal.getInstance(modalEl);
    modal.hide();

    // Remove leftover backdrop
    document.body.classList.remove("modal-open");
    document.querySelectorAll(".modal-backdrop").forEach(el => el.remove());

  } catch (error) {
    console.error("Delete error:", error);
  }
};


  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{ marginLeft: "20px", width: "100%" }}>
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
                  <th>Dos</th>
                </tr>
              </thead>

              <tbody>
                {userList.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>
                      {user.firstName} {user.lastName}
                    </td>
                    <td>{user.age}</td>
                    <td>{user.gender}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.bloodGroup}</td>
                    <td>{user.eyeColor}</td>
                    <td>
                      {user.hair
                        ? `${user.hair.color} (${user.hair.type})`
                        : "N/A"}
                    </td>
                    <td>
                      <button
                        className="btn btn-info btn-sm"
                        onClick={() => navigate(`/user/${user.id}`)}
                      >
                        View
                      </button>
                      <button
                        className="btn btn-info btn-sm"
                        onClick={() =>
                          navigate(`/user/edit/${user.id}`, { state: 2 })
                        }
                      >
                        Edit
                      </button>
                      {/* <button className="btn btn-info btn-sm" onClick={() =>handleDelete(user.id)} >Delete</button> */}
                      <button
                        className="btn btn-danger btn-sm ms-2"
                        onClick={() => setDeleteId(user.id)}
                        data-bs-toggle="modal"
                        data-bs-target="#deleteModal"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="d-flex justify-content-end gap-2 mt-3">
            <button
              className="btn btn-primary"
              onClick={() => setSkip(skip - 10)}
              disabled={skip === 0}
            >
              Previous
            </button>
            <button
              className="btn btn-primary"
              onClick={() => setSkip(skip + 10)}
            >
              Next
            </button>
          </div>
          <div
            className="modal fade"
            id="deleteModal"
            tabIndex="-1"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Confirm Delete</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                  ></button>
                </div>

                <div className="modal-body">
                  Are you sure you want to delete this user?
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>

                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={handleConfirmDelete}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
