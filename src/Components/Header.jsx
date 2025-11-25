import React from "react";
import { Link, useLocation} from "react-router-dom";  
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
const location =useLocation()
const isUserPage = location.pathname.startsWith("/user")

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <a className="navbar-brand" href="/">
        <h2 className="m-0">UserNest</h2>
      </a>

      <div className="collapse navbar-collapse show">
        <ul className="navbar-nav ms-auto">
          {!isUserPage && (
            <>
          <li className="nav-item">
            <Link className="btn btn-primary mx-2" to="/home">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link className="btn btn-primary mx-2" to="/user">
              User
            </Link>
          </li>
          </>
          )}
          
          {location.pathname.startsWith("/user")&&(
          <li className="nav-item">
            <Link className="btn btn-warning mx-2" to="/logout">
              Logout
            </Link>
          </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
