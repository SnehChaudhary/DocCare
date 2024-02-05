import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className="container my-5">
        <div className="card container w-25">
            <div className="card-body ">
                <ul className='list-group list-group-flush'>
                    <li className='list-group my-3'><a role="button" to="/signup/hospital" className="btn btn-primary">Hospital</a></li>
                    <li className='list-group my-3'><a role="button" to="/signup/doctor" className="btn btn-primary">Doctor</a></li>
                    <li className='list-group my-3'><a role="button" to="/signup/patient" className="btn btn-primary">Patient</a></li>
                </ul> 
            </div>
        </div>
    </div>
  )
}

export default Signup


