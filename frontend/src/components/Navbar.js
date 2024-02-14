import React, { useContext } from "react";
import { Link } from "react-router-dom";
import contextAPI from "../context/ContextAPI";

const Navbar = () => {

  const context = useContext(contextAPI);

  const {hospitalSuccess, doctorSuccess, patientSuccess} = context;

  const ivsbl1 = (localStorage.getItem("patientJWT")!==null) ? '' : 'd-none';
  const ivsbl2 = (localStorage.getItem("doctorJWT")!==null) ? '' : 'd-none';
  const ivsbl3 = (localStorage.getItem("hospitalJWT")!==null) ? '' : 'd-none';
  const vsbl = (localStorage.getItem("hospitalJWT")!==null || localStorage.getItem("doctorJWT")!==null || localStorage.getItem("patientJWT")!==null) ? 'd-none' : '';
  const ivsbl = (localStorage.getItem("hospitalJWT")!==null || localStorage.getItem("doctorJWT")!==null || localStorage.getItem("patientJWT")!==null) ? '' : 'd-none';

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
                <Link className="nav-link active" aria-current="page" to="/home">
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
            <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              {vsbl==='d-none' ? 'Name' : 'Login'}
            </button>
            <ul className="dropdown-menu">
              <li><Link className={`${vsbl} dropdown-item`} to="/login">Login</Link></li>
              <li><Link className={`${vsbl} dropdown-item`} to="/signup">Signup</Link></li>
              <li><Link className={`${ivsbl1} dropdown-item`} to="/patientProfile">Profile</Link></li>
              <li><Link className={`${ivsbl2} dropdown-item`} to="/doctorProfile">Profile</Link></li>
              <li><Link className={`${ivsbl3} dropdown-item`} to="/hospitalProfile">Profile</Link></li>
              <li><Link className={`${ivsbl1} dropdown-item`} to="/document">Documents</Link></li>
              <li><Link className={`${ivsbl} dropdown-item`} to="/#">Logout</Link></li>
            </ul>
          </div>
            {/* <form className={`d-flex`} role="search">
              <Link role="button" type="button" className={`${vsbl} btn btn-primary mx-1`} to="/signup">Signup</Link>
              <Link role="button" type="button" className={`btn btn-primary mx-1`} to="/login">{(hospitalSuccess===true || doctorSuccess===true || patientSuccess===true) ? 'Logout' : 'Login'}</Link>
            </form> */}
            {/* <form className={`${ivsbl} d-flex`} role="search">
              <Link role="button" type="button" className="btn btn-primary mx-1" to="/logout">Logout</Link>
            </form> */}
            {/* <form className={`{(${hospitalSuccess} || ${doctorSuccess} || ${patientSuccess}) ? 'visible' : 'invisible'} d-flex`} role="search">
              <Link role="button" type="button" className="btn btn-primary mx-1" to="/logout">Logout</Link>
            </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
