import React from 'react'

const CreateDoctorCard = ({
    name,speciality,gender,contact
}) => {

    const url = "https://pbs.twimg.com/media/Fz8DrbdWYAA6fVo.jpg:large"
  return (
    <div className="card ">
        <img className="card-img-top" src={url} alt="Card image cap"/>
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">speciality: {speciality}</p>
            <p className="card-text">Gender: {gender}</p>
            <p className="card-text">Contact Number: {contact}</p>
      </div>
    </div>
  )
}

export default CreateDoctorCard
