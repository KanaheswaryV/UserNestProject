import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Sidebar = () => {
  return (
    <div
      className="d-flex flex-column bg-dark text-white p-3"
      style={{ width: "220px", height: "100vh", position: "fixed" }}
    >

      <a href="/home" className="btn btn-primary mb-3">Home</a>
      <a href="/user" className="btn btn-primary mb-3">User</a>
      <a href="/feedback" className="btn btn-primary mb-3">FeedBack</a>
    </div>
  );
};

export default Sidebar;
