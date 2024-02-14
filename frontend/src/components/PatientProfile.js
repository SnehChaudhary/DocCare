import React, { useContext, useEffect } from 'react'
import contextAPI from '../context/ContextAPI'

const PatientProfile = () => {

    const context = useContext(contextAPI);
    const {patientProfile} = context;
    let detail = {};

    useEffect(()=>{
        detail = patientProfile();
    },[]);

  return (
    <div>
      <h2>Name : </h2> {detail.name}
      <h2>Contact : </h2> {detail.contact}
      <h2>Gender : </h2> {detail.gender}
      <h2>Email : </h2> {detail.emailId}
      <h2>Height : </h2> {detail.height} cm
      <h2>Weight : </h2> {detail.weight} kg
      <h2>Blood Group : </h2> {detail.bloodGroup}
      <h2>Birth Date : </h2> {detail.birthDate}
      <h2>Address : </h2> {detail.address}
    </div>
  )
}

export default PatientProfile