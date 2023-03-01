import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
    <div style={{ opacity: "0.7" }}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            to="/"
            style={{
              fontWeight: "bold",
              color: "white",
              fontFamily: "cursive",
              opacity: "1 important",
            }}
          >
            F🍔🍔dish
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                  style={{
                    color: location.pathname === "/" ? "#FAA0A0" : "white",
                    fontWeight: location.pathname === "/" ? "bold" : "inherit",
                  }}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/login"
                  style={{
                    color: location.pathname === "/login" ? "#FAA0A0" : "white",
                    fontWeight:
                      location.pathname === "/login" ? "bold" : "inherit",
                  }}
                >
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/createUser"
                  style={{
                    color:
                      location.pathname === "/createUser" ? "#FAA0A0" : "white",
                    fontWeight:
                      location.pathname === "/createUser" ? "bold" : "inherit",
                  }}
                >
                  Signup
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
