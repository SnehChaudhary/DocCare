import React, { useContext, useState,useEffect } from 'react'
import contextAPI from '../context/ContextAPI'
import CreateDoctorCard from './CreateDoctorCard';

const BookAppointment = () => {
    const {doctorAll,hospital} = useContext(contextAPI);

    const [doctorDetails,setDoctorDetails] = useState([]);
  
    useEffect(()=>{
        doctorAll(hospital._id).then((response)=>{
            setDoctorDetails(response.doctors);
        })
    },[])

    const url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHH7mMDHH0S0oWu5HT4FiCTd900_jix22KWhOj6VDlww&s";

    return (
    <div>
        <div className='container row m-4'>
            <div className="col-md-1"></div>
                <img className="col-md-2 ml-2" src={url} alt="Card image cap"/>
                
                <div className="col-md-4"></div>

                <div className="card-body col-md-5 mt-5">
                    <h5 className="card-title">{hospital.name}</h5>
                    <p className="card-text"></p>
                    <p className="card-text">Contact Number: {hospital.contact}</p>
                    <p className="card-text">Address: {hospital.address}</p>
                    <br />
            </div>
        </div>

        <div className='container'>
            <div className="row container ">
                {doctorDetails.map((doctor)=>{
                    return <div className="col-md-4 py-2"> 
                        <CreateDoctorCard key={doctor._id} name={doctor.name} speciality={doctor.speciality} gender={doctor.gender} contact={doctor.contact}/>
                            </div>
                    })}
            </div>
        </div>
    </div>
  )
}

export default BookAppointment
