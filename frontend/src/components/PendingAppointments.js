import React, { useContext, useEffect, useState } from 'react'
import contextAPI from '../context/ContextAPI'

const CompletedAppointments = () => {
    const [appointment,setAppointment] = useState([]);
    const {pendingAppointment,rejectAppointment,acceptAppointment} = useContext(contextAPI);
    
    let cnt = 0;

    const currDate = new Date;

    const currentDate = currDate.getFullYear()+ "-" + currDate.getMonth() + "-" + currDate.getDate();

    const [date,setDate] = useState(currentDate);

    const [time,setTime] = useState(currDate.getTime());

    useEffect(()=>{
        pendingAppointment().then((response)=>{
            setAppointment(response);
        })
    },[cnt]);

  return (appointment.length>0 && <div className='container row'>
      {appointment.map((appoint)=>{
        return <div class="card w-25 col-md-6 m-2" key={appoint.reqId}>
                <div class="card-body">
                    <h5 class="card-title">{appoint.doctor[0].name}</h5>
                    <p class="card-text">{appoint.doctor[0].speciality}.</p>
                    <p class="card-text">Patient Name: {appoint.patient[0].name}</p>

                    <label>Appointment Date</label>
                    <input type='date' className='form-control my-3' onChange={(e)=>{setDate(e.value)}}/>

                    <label>Appointment Time</label>
                    <input type='time' className='form-control my-3'onChange={(e)=>{setTime(e.value)}}/>
                    
                    <div className='row'>
                    <div className='col-md-1'></div>
                    <button class="btn btn-success col-md-4" onClick={()=>{
                        acceptAppointment({
                            reqId: appoint.reqId,
                            date: date,
                            time: time
                        });cnt++;
                    }}>Accept</button>
                    <div className='col-md-2'></div>
                    <button class="btn btn-danger col-md-4" id={appoint.reqId} onClick={(e)=>{rejectAppointment(e.target.id);cnt--;}}>Reject</button>
                    </div>
                </div>
            </div>
      })}
    </div>
  )
}

export default CompletedAppointments
