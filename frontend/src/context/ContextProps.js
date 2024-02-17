import { useMemo, useState } from "react";
import ContextAPI from "./ContextAPI";

const ContextProps = (props) => {
  const [hospital, setHospital] = useState({});

    

  const [ivsbl1, setIvsbl1] = useState(
    localStorage.getItem("patientJWT") !== null ? "" : "d-none"
  );
  const [ivsbl2, setIvsbl2] = useState(
    localStorage.getItem("doctorJWT") !== null ? "" : "d-none"
  );
  const [ivsbl3, setIvsbl3] = useState(
    localStorage.getItem("hospitalJWT") !== null ? "" : "d-none"
  );
  const [vsbl, setVsbl] = useState(
    localStorage.getItem("hospitalJWT") !== null ||
      localStorage.getItem("doctorJWT") !== null ||
      localStorage.getItem("patientJWT") !== null
      ? "d-none"
      : ""
  );
  const [ivsbl, setIvsbl] = useState(
    localStorage.getItem("hospitalJWT") !== null ||
      localStorage.getItem("doctorJWT") !== null ||
      localStorage.getItem("patientJWT") !== null
      ? ""
      : "d-none"
  );

  const hospitalProfile = async () => {
    const response = await fetch("http://localhost:5000/hospital/getDetail", {
      method: "GET",
      headers: {
        token: localStorage.getItem("hospitalJWT"),
      },
    });

    const detail = await response.json();

    return detail.hospital;
  };

  const allDoctors = async () => {
    const response = await fetch("http://localhost:5000/hospital/alldoctor", {
      method: "GET",
      headers: {
        token: localStorage.getItem("hospitalJWT"),
      },
    });

    const detail = await response.json();

    return detail;
  };

  const doctorAll = async (hospitalId) => {
    const response = await fetch("http://localhost:5000/hospital/alldoctor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        hosId: hospitalId,
      }),
    });

    const details = await response.json();

    return details;
  };

  const patientProfile = async () => {
    const response = await fetch("http://localhost:5000/patient/getDetail", {
      method: "GET",
      headers: {
        token: localStorage.getItem("patientJWT"),
      },
    });

    const detail = await response.json();

    return detail;
  };

  const patientLogin = async (patientDetails) => {
    const response = await fetch("http://localhost:5000/patient/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        emailId: patientDetails.emailId,
        password: patientDetails.password,
      }),
    });

    const details = await response.json();

    console.log(details);

    if (details.msg === "Enter valid credtetial!") {
      return { success: false, msg: details.msg };
    } else if (details.msg === "Login Success") {
      localStorage.setItem("patientJWT", details.token);
      const patient = await patientProfile();
      setTitle(patient.name);
      setIvsbl1('');
      setVsbl('d-none')
      setIvsbl('')
      return { success: true, msg: details.msg };
    }
  };

  const hospitalLogin = async (hospitalDetails) => {
    const response = await fetch("http://localhost:5000/hospital/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        secKey: hospitalDetails.secKey,
        password: hospitalDetails.password,
      }),
    });

    const details = await response.json();

    if (
      details.msg === "Enter the valid cretendials." ||
      details.msg === "Your details are not verified yet!!"
    ) {
      return { success: false, msg: details.msg };
    } else if (details.msg === "Login Success!") {
      localStorage.setItem("hospitalJWT", details.token);
      const hospital = await hospitalProfile();
      setTitle(hospital.name);
      setIvsbl3('')
      setVsbl('d-none')
      setIvsbl('')
      return { success: true, msg: details.msg };
        }else{
            return {success: false,msg: "Invalid credentials"};
    }
  };

  const hospitalSignup = async (hospitalDetails) => {
    const response = await fetch("http://localhost:5000/hospital/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: hospitalDetails.name,
        address: hospitalDetails.address,
        secKey: hospitalDetails.secKey,
        password: hospitalDetails.password,
        contact: hospitalDetails.contact,
        totalPatient: hospitalDetails.totalPatient,
        photo: "",
      }),
    });

    const details = await response.json();

    if (details.msg === "Please wait while your details are being verified!") {
      return { success: true, msg: details.msg };
    } else {
      return { success: false, msg: details.errors };
    }
  };

  const patientSignup = async (patient) => {
    const response = await fetch("http://localhost:5000/patient/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: patient.name,
        contact: patient.contact,
        height: patient.height,
        gender: patient.gender,
        emailId: patient.emailId,
        address: patient.address,
        weight: patient.weight,
        bloodGroup: patient.bloodGroup,
        birthDate: patient.birthDate,
        password: patient.password,
      }),
    });

    const details = await response.json();

    console.log(details);
  };

  const doctorLogin = async (doctorDetails) => {
    const response = await fetch("http://localhost:5000/doctor/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: doctorDetails.id,
        password: doctorDetails.password,
      }),
    });

    const details = await response.json();

    console.log(details);

    if (details.msg === "Enter valid credtetials !!") {
      return { success: false, msg: details.msg };
    } else if (details.msg === "Login Success") {
      localStorage.setItem("doctorJWT", details.token);
      const doctor = await doctorProfile();
      setTitle(doctor.name);
      setIvsbl2('')
      setVsbl('d-none')
      setIvsbl('')
      return { success: true, msg: details.msg };
    }
  };

  const doctorSignup = async (doctorDetail) => {
    const response = await fetch("http://localhost:5000/doctor/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: doctorDetail.id,
        name: doctorDetail.name,
        contact: doctorDetail.contact,
        speciality: doctorDetail.speciality,
        birthDate: doctorDetail.birthDate,
        gender: doctorDetail.gender,
        experience: doctorDetail.experience,
        dateOfJoin: doctorDetail.dateOfJoin,
        password: doctorDetail.password,
        secKey: doctorDetail.secKey,
      }),
    });

    const detail = await response.json();

    console.log(detail);
  };

  const getAllHospitals = async () => {
    const response = await fetch("http://localhost:5000/hospital/allHospital", {
      method: "GET",
    });

    const details = await response.json();

    return details;
  };

  const doctorProfile = async () => {
    const resposnse = await fetch("http://localhost:5000/doctor/getDetail", {
      method: "GET",
      headers: {
        token: localStorage.getItem("doctorJWT"),
      },
    });

    const details = await resposnse.json();

    return details;
  };

  const patientEdit = async (patient) => {
    const response = await fetch("http://localhost:5000/patient/updateDetail", {
      method: "PUT",
      headers: {
        token: localStorage.getItem("patientJWT"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contact: patient.contact,
        address: patient.address,
        height: patient.height,
        weight: patient.weight,
      }),
    });

    const detail = await response.json();

    console.log(detail);
  };

  const bookAppointment = async (doctorid) => {
    const response = await fetch("http://localhost:5000/appointment/book", {
      method: "POST",
      headers: {
        token: localStorage.getItem("patientJWT"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        hospitalId: hospital._id,
        doctorId: doctorid,
      }),
    });

    const details = await response.json();

    console.log(details);
  };

  const [title, setTitle] = useState("Login");

    useMemo(async ()=>{
        if(localStorage.getItem("patientJWT") !== null)
        {
            const detail = await patientProfile();
            setTitle(detail.name);
        }
        else if(localStorage.getItem("doctorJWT") !== null)
        {
            const detail = await doctorProfile();
            setTitle(detail.name);
        }
        else if(localStorage.getItem("hospitalJWT") !== null)
        {
            const detail = await hospitalProfile();
            setTitle(detail.name);
        }
    },[])


    const completedAppointment = async()=>{
        const response = await fetch('http://localhost:5000/hospital/getAllAppointment', {
            method : "GET",
            headers : {
                "token" : localStorage.getItem("hospitalJWT"),
            }
        })

        const details = await response.json();
        
        return details;
    }

    const pendingAppointment = async()=>{
        const response = await fetch('http://localhost:5000/hospital/pendingAppointment', {
            method : "GET",
            headers : {
                "token" : localStorage.getItem("hospitalJWT"),
            }
        })

        const details = await response.json();
        
        return details;
    }

    const acceptAppointment = async (details) => {
        const response = await fetch('http://localhost:5000/appointment/accept', {
            method : "PUT",
            headers : {
                "token" : localStorage.getItem("hospitalJWT"),
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                reqId: details.reqId,
                date: details.date,
                time: details.time
            })

        })

        const detail = await response.json();

        console.log(detail);
    }

    const rejectAppointment = async (reqId) => {
        const response = await fetch('http://localhost:5000/appointment/reject', {
            method : "PUT",
            headers : {
                "token" : localStorage.getItem("hospitalJWT"),
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                reqId: reqId,
            })
        })

        const detail = await response.json();

        console.log(detail);
    }

  return (
    <ContextAPI.Provider
      value={{
        hospitalLogin,
        patientLogin,
        patientSignup,
        doctorLogin,
        doctorSignup,
        hospitalSignup,
        getAllHospitals,
        patientProfile,
        doctorProfile,
        hospitalProfile,
        allDoctors,
        patientEdit,
        doctorAll,
        hospital,
        setHospital,completedAppointment,pendingAppointment,rejectAppointment,acceptAppointment,
        bookAppointment,
        vsbl,
        ivsbl,
        ivsbl1,
        ivsbl2,
        ivsbl3,
        setVsbl,
        setIvsbl,
        setIvsbl1,
        setIvsbl2,
        setIvsbl3,
        title,
        setTitle,
      }}
    >
      {props.children}
    </ContextAPI.Provider>
  );
};

export default ContextProps;
