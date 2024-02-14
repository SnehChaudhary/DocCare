import { useState } from "react";
import ContextAPI  from "./ContextAPI";

const ContextProps = (props) => {

    const [patientSuccess,setPatientSuccess] = useState(true);
    const [doctorSuccess,setDoctorSuccess] = useState(false);
    const [hospitalSuccess,setHospitalSuccess] = useState(false);

    const hospitalProfile = async()=>{
        const response = await fetch('http://localhost:5000/patient/getDetail',{
            method : "GET",
            headers: {
                "token" : localStorage.getItem("hospitalJWT")
            }
        })

        const detail = await response.json();
        
        return detail;
    }

    const patientProfile = async () => {

        const response = await fetch('http://localhost:5000/patient/getDetail',{
            method : "GET",
            headers: {
                "token" : localStorage.getItem("patientJWT")
            }
        })

        const detail = await response.json();

        return detail;
    }

    const patientLogin = async (patientDetails)=>{

        const response = await fetch("http://localhost:5000/patient/signin",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                emailId: patientDetails.emailId,
                password: patientDetails.password
            })
        });

        const details = await response.json();

        console.log(details);

        if(details.msg === "Enter valid credtetial!"){
            return {success: false,msg: details.msg};
        }else if(details.msg === "Login Success"){
            setPatientSuccess(true);
            localStorage.setItem('patientJWT',details.token);
            return {success: true,msg: details.msg};
        }
    }

    const hospitalLogin = async (hospitalDetails)=>{
        const response = await fetch("http://localhost:5000/hospital/signin",{
            method: "POST",    
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                secKey: hospitalDetails.secKey,
                password: hospitalDetails.password
            })
        });

        const details = await response.json();

        if(details.msg === "Enter the valid cretendials." || details.msg === "Your details are not verified yet!!"){
            return {success: false,msg: details.msg};
        }else if(details.msg === "Login Success!"){
            setHospitalSuccess(true);
            localStorage.setItem('hospitalJWT',details.token);
            return {success: true,msg: details.msg};
        }
    }

    const hospitalSignup = async (hospitalDetails)=>{

        const response = await fetch("http://localhost:5000/hospital/signup",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: hospitalDetails.name,
                address: hospitalDetails.address,
                secKey: hospitalDetails.secKey,
                password: hospitalDetails.password,
                contact: hospitalDetails.contact,
                totalPatient: hospitalDetails.totalPatient,
                photo: ""
            })
        });

        const details = await response.json();

        if(details.msg === "Please wait while your details are being verified!"){
            return ({success: true,msg: details.msg});
        }else{
            return ({success: false,msg: details.errors});
        }
    }

    const patientSignup = async (patient) => {
        const response = await fetch('http://localhost:5000/patient/signup',
            {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify({
                    name : patient.name,
                    contact : patient.contact,
                    height : patient.height,
                    gender : patient.gender,
                    emailId : patient.emailId,
                    address : patient.address,
                    weight : patient.weight,
                    bloodGroup : patient.bloodGroup,
                    birthDate : patient.birthDate,
                    password : patient.password,
                })
            }
        );

        const details = await response.json();

        console.log(details);
    }

    const doctorLogin = async (doctorDetails) => {
        const response = await fetch('http://localhost:5000/doctor/signin', 
        {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                id : doctorDetails.id,
                password : doctorDetails.password
            })
        });

        const detail = await response.json();

        console.log(detail);

        setDoctorSuccess(true);
    }

    const doctorSignup = async (doctorDetail) => {
        const response = await fetch('http://localhost:5000/doctor/signup',
        {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                id : doctorDetail.id,
                name : doctorDetail.name,
                contact : doctorDetail.contact,
                speciality : doctorDetail.speciality,
                birthDate : doctorDetail.birthDate,
                gender : doctorDetail.gender,
                experience : doctorDetail.experience,
                dateOfJoin : doctorDetail.dateOfJoin,
                password : doctorDetail.password,
                secKey : doctorDetail.secKey,
            })
        })

        const detail = await response.json();

        console.log(detail);
    }

    const getAllHospitals = async ()=>{
        const response = await fetch("http://localhost:5000/hospital/allHospital",{
            method: "GET"
        });

        const details = await response.json();

        return details;
    }

    const doctorProfile = async()=>{
        const resposnse = await fetch("http://localhost:5000/doctor/getDetail",{
            method: "GET",
            headers: {
                "token": "eyJhbGciOiJIUzI1NiJ9.MTIzNDU2Nzg5MA.YqW1Nn8F-4Lcm_69OVcEtYN2B1KIqgA1NPs1zwvrANM"
            }
        });

        const details = await resposnse.json();

        return details;
    }

    return (
        <ContextAPI.Provider value={{hospitalLogin,patientLogin, patientSignup, doctorLogin, doctorSignup,hospitalSignup,getAllHospitals,patientProfile,doctorProfile,patientSuccess,doctorSuccess,hospitalSuccess}} >
        {props.children}
        </ContextAPI.Provider>
    )
}

export default ContextProps;