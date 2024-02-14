import React, { useContext } from "react";
import { Link } from "react-router-dom";
import contextAPI from "../context/ContextAPI";

const Navbar = () => {

  const context = useContext(contextAPI);

  const {setLogin} = context;

  let ivsbl = (setLogin()) ? '' : 'd-none';
  let vsbl = (setLogin()) ? 'd-none' : '';

  const logout = ()=>{
    if(localStorage.getItem("patientJWT")!==null){
      localStorage.removeItem("patientJWT");
    }

    if(localStorage.getItem("doctorJWT")!==null){
      localStorage.removeItem("doctorJWT");
    }

    if(localStorage.getItem("hospitalJWT")!==null){
      localStorage.removeItem("hospitalJWT");
    }
  }

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
              <li><a className={`${vsbl} dropdown-item`} href="#">Login</a></li>
              <li><a className={`${vsbl} dropdown-item`} href="#">Signup</a></li>
              <li><a className={`${ivsbl} dropdown-item`} href="#">Profile</a></li>
              <li><a className={`${ivsbl} dropdown-item`} href="#">Documents</a></li>
              <li><a className={`${ivsbl} dropdown-item`} href="#" onClick={logout}>Logout</a></li>
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
