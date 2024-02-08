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

    return (
        <ContextAPI.Provider value={{patientLogin}} >
        {props.children}
        </ContextAPI.Provider>
    )
}

export default ContextProps;