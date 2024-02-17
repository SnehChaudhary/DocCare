import React, { useContext, useMemo, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import contextAPI from '../context/ContextAPI';
import PlusIcon from '@mui/icons-material/Add';
import toast from 'react-hot-toast';

const Home = () => {

  const [hospitals,setHospitals] = useState([]);

  const {getAllHospitals} = useContext(contextAPI);

  const getHospitals = useMemo(async()=>{
    const details = await getAllHospitals();

    setHospitals(details.hospitals);
  },[])

  return (<div className='container'>
      <h1 className='container'>Hospitals</h1>
      <div className='row'>
        {hospitals.map((hospital,index)=>{
          return <CreateHospitalCard hospital={hospital}/>
        })}
      </div>
    </div>
  )
}

function CreateHospitalCard(props){

  const hospital = props.hospital;
  const {setHospital} = useContext(contextAPI);
  const refButton = useRef(null);

  const handleClick = ()=>{
    setHospital(hospital);
    if(localStorage.getItem('patientJWT')){
      refButton.current.click()
    }else{
      toast.error("Need to login as patient!");
    }
  }
  const url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnGZWTF4dIu8uBZzgjwWRKJJ4DisphDHEwT2KhLNxBAA&s";
  return (<div className='card my-2 col-md-4' key={hospital._id}>
    <img className="card-img-top" src={url} alt="Card image cap" />

    <div className='row container'>
      <div className="card-body col-md-8">
        <p className="card-text">{hospital.name}</p>
        <p className="card-text">{hospital.address}</p>
        <p className="card-text">{hospital.contact}</p>
      </div>

      <div className='col-md-4'><PlusIcon onClick={handleClick} className='border rounded-circle bg-primary text-white' style={{width: "50px",height: "50px",margin:"20px 0px 10px 20px"}}/> Appointment </div>
      <Link className='d-none' type='button' to="/appointment" ref={refButton}>Book Appointment</Link>
  
    </div>
  </div>);
}

export default Home
