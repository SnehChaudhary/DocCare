import React, { useContext, useMemo, useState } from 'react'
import { Link } from 'react-router-dom';
import contextAPI from '../context/ContextAPI';

const Home = () => {

  const [hospitals,setHospitals] = useState([]);

  const {getAllHospitals} = useContext(contextAPI);

  const getHospitals = useMemo(async()=>{
    const details = await getAllHospitals();

    setHospitals(details.hospitals);
  },[])

  return (<div>
      <h1 className='container'>Hospitals</h1>
      <div className='d-flex justify-content-center flex-wrap'>
        {hospitals.map((hospital,index)=>{
          return <Link to="/" className='p-5' key={index}><CreateHospitalCard hospital={hospital}/></Link>
        })}
      </div>
    </div>
  )
}

function CreateHospitalCard(props){
  const hospital = props.hospital;
  return (<div className="card" style={{width: "18rem"}}>
    <img className="card-img-top" src='' alt="Card image cap" />
    <div className="card-body">
      <p className="card-text">{hospital.name}</p>
      <p className="card-text">{hospital.address}</p>
      <p className="card-text">{hospital.contact}</p>
    </div>
  </div>);
}

export default Home
