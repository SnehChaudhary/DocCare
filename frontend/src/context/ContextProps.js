import ContextAPI  from "./ContextAPI";

const ContextProps = (props) => {

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

    return (
        <ContextAPI.Provider value={{patientLogin, patientSignup, doctorLogin, doctorSignup}} >
        {props.children}
        </ContextAPI.Provider>
    )
}

export default ContextProps;