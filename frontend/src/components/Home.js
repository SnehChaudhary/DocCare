import React, { useContext, useMemo, useState } from 'react'
import { Link } from 'react-router-dom';
import contextAPI from '../context/ContextAPI';
import PlusIcon from '@mui/icons-material/Add';

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
          return <Link to="/" className='my-2 col-md-4' key={index}><CreateHospitalCard hospital={hospital}/></Link>
        })}
      </div>
    </div>
  )
}

function CreateHospitalCard(props){
  const hospital = props.hospital;
  const url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnGZWTF4dIu8uBZzgjwWRKJJ4DisphDHEwT2KhLNxBAA&s";
  return (<div className="card" >
    <img className="card-img-top" src={url} alt="Card image cap" />

    <div className='row container'>
      <div className="card-body col-md-8">
        <p className="card-text">{hospital.name}</p>
        <p className="card-text">{hospital.address}</p>
        <p className="card-text">{hospital.contact}</p>
      </div>

      <div className='col-md-4'><PlusIcon className='border rounded-circle bg-primary text-white' style={{width: "50px",height: "50px",margin:"20px 0px 10px 20px"}}/> Appointment </div>

    </div>
  </div>);
}

export default Home
