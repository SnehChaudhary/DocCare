import React, { useContext, useState } from 'react'
import contextAPI from '../context/ContextAPI';

const Patientlogin = () => {

  const [patientDetail,setPatientDetail] = useState({
    emailId : "",
    password : ""
  });

  const {patientLogin} = useContext(contextAPI);

  const onchange = (e) => {
    setPatientDetail({...patientDetail,[e.target.name] : e.target.value})
  }

  const updateDetail = (e) => {
    e.preventDefault();
    patientLogin(patientDetail);
    // const emailId = document.getElementById('emailID');
    // const password = document.getElementById('password');

    // setPatientDetail({emailId,password});

    // console.log(patientLogin(patientDetail));
  }

  return (
    <div className='container'>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" style={{width: "50%"}} className="form-control" onChange={onchange} name="emailId" value={patientDetail.emailId} id="emailID" aria-describedby="emailHelp" />
          </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" style={{width: "50%"}} className="form-control" onChange={onchange} name="password" value={patientDetail.password} id="password" />
        </div>
        <button type="submit" className="btn btn-primary" onClick={updateDetail}>Submit</button>
      </form>
    </div>
  )
}

export default Patientlogin
