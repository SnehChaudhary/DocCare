import React, { useContext } from 'react'
import contextAPI from '../context/ContextAPI';

const CreateDoctorCard = ({
    name,speciality,gender,contact,doctorId
}) => {

    const {bookAppointment} = useContext(contextAPI);

    const handleClick = () => {
      bookAppointment(doctorId);
    }

    const disp = localStorage.getItem("patientJWT") === null ? 'd-none' : ''

    const url = "https://pbs.twimg.com/media/Fz8DrbdWYAA6fVo.jpg:large"
  return (
    <div className="card ">
        <img className="card-img-top" src={url} alt="Card image cap"/>
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">speciality: {speciality}</p>
            <p className="card-text">Gender: {gender}</p>
            <p className="card-text">Contact Number: {contact}</p>

            <button type="button" onClick={handleClick} className={`${disp} btn btn-primary`} data-bs-toggle="modal" data-bs-target="#exampleModal">
              Book Appointment
            </button>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Appointment Confirmed</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    You will get appointment time shortly !!
                  </div>
                </div>
              </div>
            </div>
      </div>
    </div>
  )
}

export default CreateDoctorCard
