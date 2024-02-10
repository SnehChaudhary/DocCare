import React, { useContext, useState } from 'react'
import contextAPI from '../context/ContextAPI'

const Patientsignup = () => {

  const context = useContext(contextAPI);
  const {patientSignup} = context;

  const [patientDetail, setPatientDetail] = useState({
    name : "",
    contact : "",
    height : 0,
    gender : "",
    emailId : "",
    address : "",
    weight : "",
    bloodGroup : "",
    birthDate : "",
    password : "",
  })

  const handleClick = (e) => {
    e.preventDefault();
    patientSignup(patientDetail);
  }

  const onchange = (e) => {
    setPatientDetail({...patientDetail, [e.target.name] : e.target.value});
  }

  return (
    <div className='container my-3 fw-bold'>
    <form>
      <div className="row">
        <div className="mb-3 col-md-6">
          <label htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
          <input type="text" className="form-control" onChange={onchange} name='name' value={patientDetail.name} id="name" placeholder="Full Name" />
        </div>
        <div className="mb-3 col-md-6">
          <label htmlFor="exampleFormControlInput1" className="form-label">Blood Group</label>
          <input type="text" className="form-control" onChange={onchange} name='bloodGroup' value={patientDetail.bloodGroup} id="bloodGroup" placeholder="Blood Group" />
        </div>
      </div>
      <div className="row">
        <div className="mb-3 col-md-6">
          <label htmlFor="exampleFormControlInput1" className="form-label">Email Id</label>
          <input type="email" className="form-control" onChange={onchange} name='emailId' value={patientDetail.emailId} id="emailId" placeholder="Email" />
        </div>
        <div className="mb-3 col-md-6">
          <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
          <input type="password" className="form-control" onChange={onchange} name='password' value={patientDetail.password} id="password" placeholder="Password" />
        </div>
      </div>
      <div className="row">
        <div className="mb-3 col-md-6">
          <label htmlFor="exampleFormControlInput1" className="form-label">Gender</label>
          <input type="text" className="form-control" onChange={onchange} name='gender' value={patientDetail.gender} id="gender" placeholder="Male/Female" />
        </div>
        <div className="mb-3 col-md-6">
          <label htmlFor="exampleFormControlInput1" className="form-label">Birth Date</label>
          <input type="date" className="form-control" onChange={onchange} name='birthDate' value={patientDetail.birthDate} id="birthDate" placeholder="YYYY-MM-DD" />
        </div>
      </div>
      <div className="row">
        <div className="mb-3 col-md-6">
          <label htmlFor="exampleFormControlInput1" className="form-label">Height</label>
          <input type="text" className="form-control" onChange={onchange} name='height' value={patientDetail.height} id="height" placeholder="Height" />
        </div>
        <div className="mb-3 col-md-6">
          <label htmlFor="exampleFormControlInput1" className="form-label">Weight</label>
          <input type="text" className="form-control" onChange={onchange} name='weight' value={patientDetail.weight} id="weight" placeholder="Weight" />
        </div>
      </div>
      <div className="row">
        <div className="mb-3 col-md-6">
          <label htmlFor="exampleFormControlInput1" className="form-label">Contact Number</label>
          <input type="text" className="form-control" onChange={onchange} name='contact' value={patientDetail.contact} id="contact" placeholder="Contact Number" />
        </div>
        <div className="mb-3 col-md-6">
          <label htmlFor="exampleFormControlInput1" className="form-label">Address</label>
          <input type="text" className="form-control" onChange={onchange} name='address' value={patientDetail.address} id="address" placeholder="Address" />
        </div>
      </div>
      <button onClick={handleClick} type="submit" className="btn btn-primary">Submit</button>
    </form>
  </div>
  )
}

export default Patientsignup