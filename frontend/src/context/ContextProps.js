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

        if(details.msg === "Enter valid credtetial!"){
            return {success: false,msg: details.msg};
        }else if(details.msg === "Login Success"){
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

    const getAllHospitals = async ()=>{
        const response = await fetch("http://localhost:5000/hospital/allHospital",{
            method: "GET"
        });

        const details = await response.json();

        return details;
    }

    return (
        <ContextAPI.Provider value={{hospitalLogin,patientLogin,hospitalSignup,getAllHospitals}} >
        {props.children}
        </ContextAPI.Provider>
    )
}

export default ContextProps;