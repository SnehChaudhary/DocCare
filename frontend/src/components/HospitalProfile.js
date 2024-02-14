import { useContext, useEffect, useState } from "react"
import contextAPI from "../context/ContextAPI"
import CreateDoctorCard from "./CreateDoctorCard";

export default function HospitalProfile(){
    const {hospitalProfile,allDoctors} = useContext(contextAPI);
    const [hospitalDetail,setHositalDetail] = useState({});
    const [doctors,setDoctors] = useState([]);

    useEffect(()=>{
        allDoctors().then((response)=>{
            setDoctors(response.doctors);
        })
    },[])
    
    useEffect(()=>{
        hospitalProfile().then((response)=>{
            setHositalDetail(response);
        })
    },[])

    const url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHH7mMDHH0S0oWu5HT4FiCTd900_jix22KWhOj6VDlww&s";

    return <div className="row border container p-4 mx-5">
            <div className="col-md-1"></div>
            <img className="col-md-2 ml-2" src={url} alt="Card image cap"/>
            
            <div className="col-md-4"></div>

            <div className="card-body col-md-5 mt-5">
                <h5 className="card-title">{hospitalDetail.name}</h5>
                <p className="card-text"></p>
                <p className="card-text">Contact Number: {hospitalDetail.contact}</p>
                <p className="card-text">Address: {hospitalDetail.address}</p>
                <br />
            </div>

            <p></p><p></p><p></p>

            <h2 className="">All Doctors</h2>
                <div className="row container ">
                    {doctors.map((doctor)=>{
                        return <div className="col-md-3 py-2"> 
                            <CreateDoctorCard key={doctor._id} name={doctor.name} speciality={doctor.speciality} gender={doctor.gender} contact={doctor.contact}/>
                        </div>
                    })}
                </div>
            
        </div>
}
