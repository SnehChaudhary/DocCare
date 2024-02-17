import React, { useContext} from "react";
import { Link } from "react-router-dom";
import contextAPI from "../context/ContextAPI";

const Navbar = () => {
  const context = useContext(contextAPI);

  const {
    vsbl,
    ivsbl,
    ivsbl1,
    ivsbl2,
    ivsbl3,
    setVsbl,
    setIvsbl,
    setIvsbl1,
    setIvsbl2,
    setIvsbl3,
    title,
    setTitle
  } = context;

  const logout = () => {
    if (localStorage.getItem("patientJWT") !== null) {
      localStorage.removeItem("patientJWT");
      setIvsbl1("d-none");
      setVsbl("");
      setIvsbl("d-none");
      setTitle('Login')
    }

    if (localStorage.getItem("doctorJWT") !== null) {
      localStorage.removeItem("doctorJWT");
      setIvsbl2("d-none");
      setVsbl("");
      setIvsbl("d-none");
      setTitle('Login')
    }

    if (localStorage.getItem("hospitalJWT") !== null) {
      localStorage.removeItem("hospitalJWT");
      setIvsbl3("d-none");
      setVsbl("");
      setIvsbl("d-none");
      setTitle('Login')
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about">
                  About
                </Link>
              </li>
            </ul>

            <div className="dropdown d-flex">
              <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {title}
              </button>
              <ul className="dropdown-menu">
                <li>
                  <Link className={`${vsbl} dropdown-item`} to="/login">
                    Login
                  </Link>
                </li>
                <li>
                  <Link className={`${vsbl} dropdown-item`} to="/signup">
                    Signup
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${ivsbl1} dropdown-item`}
                    to="/patientProfile"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${ivsbl2} dropdown-item`}
                    to="/doctorProfile"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${ivsbl3} dropdown-item`}
                    to="/hospitalProfile"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link className={`${ivsbl1} dropdown-item`} to="/document">
                    Documents
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${ivsbl} dropdown-item`}
                    to="/home"
                    onClick={logout}
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
