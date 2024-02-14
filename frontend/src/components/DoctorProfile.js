import { useContext, useEffect, useState } from "react"
import contextAPI from "../context/ContextAPI"

export default function DoctorProfile(){
    const { doctorProfile } = useContext(contextAPI);
    const [doctorDetail,setDoctorDetail] = useState({});

    useEffect(()=>{
        doctorProfile().then((response)=>{setDoctorDetail(response.doctorDetails)});
    },[]);

    const url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHH7mMDHH0S0oWu5HT4FiCTd900_jix22KWhOj6VDlww&s";

    return <div className="card container" style={{height: "600px",width: "40%"}}>
                <img className="card-img-top border rounded-circle container my-3" src={url} alt="Card image cap" style={{height: "150px",width: "160px"}}/>
                <div className="card-body">
                    <h5 className="card-title">{doctorDetail.name}</h5>
                    <p className="card-text">Doctor ID: {doctorDetail.id}</p>
                    <p className="card-text">Contact Number: {doctorDetail.contact}</p>
                    <p className="card-text">Year(s) of Experience: {doctorDetail.experience}</p>
                    <p className="card-text">Birth Date: {doctorDetail.birthDate.slice(0,10)}</p>
                    <p className="card-text">Speciality: {doctorDetail.speciality}</p>
                    <p className="card-text">Date of Joining: {doctorDetail.dateOfJoin.slice(0,10)}</p>
                    <p className="card-text">Gender: {doctorDetail.gender}</p>
                </div>
            </div>
}