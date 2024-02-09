import React, { useContext, useState } from 'react'
import contextAPI from '../context/ContextAPI';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Hospitalsignup = () => {

  const navigate = useNavigate();

  const {hospitalSignup} = useContext(contextAPI);

  const [hospitalDetail,setHospitalDetail] = useState({
    name: "",
    address: "",
    secKey: "",
    password: "",
    totalPatient: "",
    contact: ""
  });

  const handleChange = (e) => {
    setHospitalDetail({...hospitalDetail,[e.target.name]: e.target.value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await hospitalSignup(hospitalDetail);

    if(response.success){
      toast.success(response.msg);
      navigate('/');
    }else{
      const errors = response.msg;

      errors.map((error)=>{
        toast.error(error.msg);
      })
    }
  }

  return (
    <div className='container my-3 fw-bold'>
    <form>
      <div className="row">
        <div className="mb-3 col-md-6">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" onChange={handleChange} name="name" value={hospitalDetail.name} />
        </div>
        <div className="mb-3 col-md-6">
          <label className="form-label">Address</label>
          <input type="text" className="form-control" onChange={handleChange} name="address" value={hospitalDetail.address} />
        </div>
      </div>
      <div className="row">
        <div className="mb-3 col-md-6">
          <label htmlFor="exampleFormControlInput1" className="form-label">Secret Key</label>
          <input type="text" className="form-control" onChange={handleChange} name="secKey" value={hospitalDetail.secKey} />
        </div>
        <div className="mb-3 col-md-6">
          <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
          <input type="password" className="form-control" onChange={handleChange} name="password" value={hospitalDetail.password}/>
        </div>
      </div>
      <div className="row">
        <div className="mb-3 col-md-6">
          <label htmlFor="exampleFormControlInput1" className="form-label">Contact</label>
          <input type="text" className="form-control" onChange={handleChange} name="contact" value={hospitalDetail.contact}/>
        </div>
        <div className="mb-3 col-md-6">
          <label htmlFor="exampleFormControlInput1" className="form-label">Total Patient</label>
          <input type="text" className="form-control" onChange={handleChange} name="totalPatient" value={hospitalDetail.totalPatient} />
        </div>
      </div>
      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
    </form>
  </div>
  )
}

export default Hospitalsignup
