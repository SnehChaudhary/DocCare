import React, { useContext, useState } from 'react'
import contextAPI from '../context/ContextAPI';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Patientlogin = () => {

  const navigate = useNavigate();

  const [patientDetail,setPatientDetail] = useState({
    emailId : "",
    password : ""
  });

  const {patientLogin} = useContext(contextAPI);

  const onChange = (e) => {
    setPatientDetail({...patientDetail,[e.target.name] : e.target.value})
  }

  const updateDetail = async (e) => {
    e.preventDefault();
    const response = await patientLogin(patientDetail);

    if(response.success){
      toast.success(response.msg);
      navigate('/');
    }else if(!response.success){
      toast.error(response.msg);
    }
  }

  return (
    <div className='container'>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" style={{width: "50%"}} className="form-control" onChange={onChange} name="emailId" value={patientDetail.emailId} />
          </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" style={{width: "50%"}} className="form-control" onChange={onChange} name="password" value={patientDetail.password}qw/>
        </div>
        <button type="submit" className="btn btn-primary" onClick={updateDetail}>Submit</button>
      </form>
    </div>
  )
}

export default Patientlogin
