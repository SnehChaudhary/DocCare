import React, { useContext, useState } from 'react'
import contextAPI from '../context/ContextAPI'

const Doctorsignup = () => {

  const context = useContext(contextAPI);
  const {doctorSignup} = context;

  const [doctorDetail, setDoctorDetail] = useState({
    id : "",
    name : "",
    contact : "",
    speciality : "",
    birthDate : "",
    gender : "",
    experience : "",
    dateOfJoin : "",
    password : "",
    secKey : ""
  })

  const handleClick = (e) => {
    e.preventDefault();
    doctorSignup(doctorDetail);
    setDoctorDetail({
      id : "",
      name : "",
      contact : "",
      speciality : "",
      birthDate : "",
      gender : "",
      experience : "",
      dateOfJoin : "",
      password : "",
      secKey : ""
    })
  }

  const onchange = (e) => {
    setDoctorDetail({...doctorDetail, [e.target.name] : e.target.value});
  }

  return (
    <div className='container'>
      <form>
      <div className='row'>
          <div className="mb-3 col-md-6">
            <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Doctor ID</label>
            <input type="text" onChange={onchange} name="id" value={doctorDetail.id} className="form-control" id="id" aria-describedby="emailHelp" />
          </div>
          
          <div className="mb-3 col-md-6">
            <label htmlFor="exampleInputEmail1" className="form-label fw-bold" >Years of Experience</label>
            <input type="number" onChange={onchange} name='experience' value={doctorDetail.experience} className="form-control" id="experience" aria-describedby="emailHelp"  />
          </div>
        </div>

        <div className='row'>
          <div className="mb-3 col-md-6">
            <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Name</label>
            <input type="text" className="form-control" onChange={onchange} name='name' value={doctorDetail.name} id="name" aria-describedby="emailHelp" />
          </div>

          <div className="mb-3 col-md-6">
            <label htmlFor="exampleInputEmail1" className="form-label fw-bold" >Birth Date</label>
            <input type="date" className="form-control" onChange={onchange} name='birthDate' value={doctorDetail.birthDate} id="birthDate" aria-describedby="emailHelp" placeholder='Seperate them with "," between them' />
          </div>
        </div>

        <div className='row'>
          <div className="mb-3 col-md-6">
            <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Contact Number</label>
            <input type="text" className="form-control" onChange={onchange} name='contact' value={doctorDetail.contact} id="contact" aria-describedby="emailHelp" />
          </div>
          
          <div className="mb-3 col-md-6">
            <label htmlFor="exampleInputEmail1" className="form-label fw-bold" >Speciality</label>
            <input type="name" className="form-control" onChange={onchange} id="speciality" name='speciality' value={doctorDetail.speciality} aria-describedby="emailHelp" placeholder='Seperate them with "," between them' />
          </div>
        </div>

        <div className='row'>
          <div className="mb-3 col-md-6">
            <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Password</label>
            <input type="password" className="form-control" onChange={onchange} name='password' value={doctorDetail.password} id="password" />
          </div>

          <div className="mb-3 col-md-6">
            <label htmlFor="exampleInputEmail1" className="form-label fw-bold" >Date of Joining</label>
            <input type="date" className="form-control" onChange={onchange} name='dateOfJoin' value={doctorDetail.dateOfJoin} id="dateOfJoin" aria-describedby="emailHelp" placeholder='Seperate them with "," between them' />
          </div>
        </div>

        <div className='row'>
          <div className="mb-3 col-md-6">
            <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Secret Key</label>
            <input type="password" className="form-control" onChange={onchange} name='secKey' value={doctorDetail.secKey} id="secKey" />
          </div>

          <div className="mb-3 col-md-6">
            <label htmlFor="exampleInputEmail1" className="form-label fw-bold" >Gender</label>
            <input type="text" className="form-control" onChange={onchange} name='gender' value={doctorDetail.gender} id="gender" aria-describedby="emailHelp" placeholder='Male/Female' />
          </div>
        </div>

        <button onClick={handleClick} type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Doctorsignup
