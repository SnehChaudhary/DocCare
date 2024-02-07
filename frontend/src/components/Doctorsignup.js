import React from 'react'

const Doctorsignup = () => {
  return (
    <div className='container'>
      <form>
      <div className='row'>
          <div className="mb-3 col-md-6">
            <label for="exampleInputEmail1" className="form-label fw-bold">Doctor ID</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          
          <div className="mb-3 col-md-6">
            <label for="exampleInputEmail1" className="form-label fw-bold" >Years of Experience</label>
            <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
          </div>
        </div>

        <div className='row'>
          <div className="mb-3 col-md-6">
            <label for="exampleInputEmail1" className="form-label fw-bold">Name</label>
            <input type="text"  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>

          <div className="mb-3 col-md-6">
            <label for="exampleInputEmail1" className="form-label fw-bold" >Birth Date</label>
            <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Seperate them with "," between them' />
          </div>
        </div>

        <div className='row'>
          <div className="mb-3 col-md-6">
            <label for="exampleInputEmail1" className="form-label fw-bold">Contact Number</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          
          <div className="mb-3 col-md-6">
            <label for="exampleInputEmail1" className="form-label fw-bold" >Speciality</label>
            <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Seperate them with "," between them' />
          </div>
        </div>

        <div className='row'>
          <div className="mb-3 col-md-6">
            <label for="exampleInputPassword1" className="form-label fw-bold">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>

          <div className="mb-3 col-md-6">
            <label for="exampleInputEmail1" className="form-label fw-bold" >Date of Joining</label>
            <input type="date" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Seperate them with "," between them' />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Doctorsignup
