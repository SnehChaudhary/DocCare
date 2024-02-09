import React, { useContext, useState } from 'react'
import contextAPI from '../context/ContextAPI';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Hospitallogin = () => {

  const navigate = useNavigate();

  const [hospitalDetail,setHospitalDetail] = useState({
    secKey: '',
    password: ''
  });

  const {hospitalLogin} = useContext(contextAPI);

  const handleChange = (e)=>{
    setHospitalDetail({...hospitalDetail,[e.target.name]: e.target.value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await hospitalLogin(hospitalDetail);

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
          <label htmlFor="exampleInputEmail1" className="form-label">Secret Key</label>
          <input type="text"  style={{width: "50%"}} className="form-control" name="secKey" value = {hospitalDetail.secKey} onChange={handleChange} />
          </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" style={{width: "50%"}} className="form-control" name="password" value = {hospitalDetail.password} onChange={handleChange}/>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}

export default Hospitallogin
