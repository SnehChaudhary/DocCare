import { useContext, useEffect,useState } from 'react'
import contextAPI from '../context/ContextAPI'

const PatientProfile = () => {

    const {patientProfile} = useContext(contextAPI);
    const [patientDetail,setPatientDetail] = useState({});

    useEffect(()=>{
        patientProfile().then((response)=>{

          console.log(response.birthDate)

          response.birthDate = response.birthDate.slice(0,10);
        
          setPatientDetail(response);
        })
    },[]);

  const url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHH7mMDHH0S0oWu5HT4FiCTd900_jix22KWhOj6VDlww&s";

  return (
    <div className="card container" style={{height: "600px",width: "40%"}}>
      <img className="card-img-top border rounded-circle container my-3" src={url} alt="Card image cap" style={{height: "150px",width: "160px"}}/>
        <div className="card-body">
          <h5 className="card-title">{patientDetail.name}</h5>
          <p className="card-text">Contact Number: {patientDetail.contact}</p>
          <p className="card-text">Email ID: {patientDetail.emailId}</p>
          <p className="card-text">Gender: {patientDetail.gender}</p>
          <p className="card-text">Address: {patientDetail.address}</p>
          <p className="card-text">Birth Date: {patientDetail.birthDate}</p>
          <p className="card-text">Height: {patientDetail.height}</p>
          <p className="card-text">Weight: {patientDetail.weight}</p>
          <p className="card-text">Blood Group: {patientDetail.bloodGroup}</p>
          <a href="#" className="btn btn-primary">Edit Details</a>
      </div>
    </div>
  )
}

export default PatientProfile