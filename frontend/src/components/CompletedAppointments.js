import React, { useContext, useEffect, useState } from 'react'
import contextAPI from '../context/ContextAPI'

const CompletedAppointments = () => {
    const [appointment,setAppointment] = useState([]);
    const {completedAppointment} = useContext(contextAPI);

    useEffect(()=>{
        completedAppointment().then((response)=>{
            console.log(response);
            setAppointment(response);
        })
    },[]);

  return (appointment.length>0 && <div className='container'>
      {appointment.map((appoint)=>{
        return <div class="card w-25">
                <div class="card-body">
                    <h5 class="card-title">{appoint.doctor[0].name}</h5>
                    <p class="card-text">{appoint.doctor[0].speciality}.</p>
                    <p class="card-text">Patient Name: {appoint.patient[0].name}</p>
                    <p class="card-text">Patient Contact Number: {appoint.patient[0].contact}</p>
                    <p class="card-text">Date: {appoint.date.slice(0,10)}</p>
                </div>
            </div>
      })}
    </div>
  )
}

export default CompletedAppointments
