import React, { useContext, useState } from 'react'
import contextAPI from '../context/ContextAPI';

const Doctorlogin = () => {

  const context = useContext(contextAPI);
  const {doctorLogin} = context;
  
  const [doctorDetail,setDoctorDetail] = useState({
    id : "",
    password : ""
  })

  const onchange = (e) => {
    setDoctorDetail({...doctorDetail, [e.target.name] : e.target.value});
  }

  const handleClick = (e) => {
    e.preventDefault();
    doctorLogin(doctorDetail);
  }

  return (
    <div className='container'>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Doctor ID</label>
          <input type="text" onChange={onchange} style={{width: "50%"}} className="form-control" name='id' value={doctorDetail.id} id="id" aria-describedby="emailHelp" />
          </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" onChange={onchange} style={{width: "50%"}} className="form-control" name='password' value={doctorDetail.password} id="password" />
        </div>
        <button onClick={handleClick} type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Doctorlogin
