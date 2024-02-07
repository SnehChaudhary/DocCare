import React from 'react'

const Patientsignup = () => {
  return (
    <div className='container my-3 fw-bold'>
    <form>
      <div className="row">
        <div className="mb-3 col-md-6">
          <label for="exampleFormControlInput1" className="form-label">Full Name</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Full Name" />
        </div>
        <div className="mb-3 col-md-6">
          <label for="exampleFormControlInput1" className="form-label">Blood Group</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Blood Group" />
        </div>
      </div>
      <div className="row">
        <div className="mb-3 col-md-6">
          <label for="exampleFormControlInput1" className="form-label">Email Id</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email" />
        </div>
        <div className="mb-3 col-md-6">
          <label for="exampleFormControlInput1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="Password" />
        </div>
      </div>
      <div className="row">
        <div className="mb-3 col-md-6">
          <label for="exampleFormControlInput1" className="form-label">Gender</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Male/Female" />
        </div>
        <div className="mb-3 col-md-6">
          <label for="exampleFormControlInput1" className="form-label">Birth Date</label>
          <input type="date" className="form-control" id="exampleFormControlInput1" placeholder="YYYY-MM-DD" />
        </div>
      </div>
      <div className="row">
        <div className="mb-3 col-md-6">
          <label for="exampleFormControlInput1" className="form-label">Height</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Height" />
        </div>
        <div className="mb-3 col-md-6">
          <label for="exampleFormControlInput1" className="form-label">Weight</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Weight" />
        </div>
      </div>
      <div className="row">
        <div className="mb-3 col-md-6">
          <label for="exampleFormControlInput1" className="form-label">Contact Number</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Contact Number" />
        </div>
        <div className="mb-3 col-md-6">
          <label for="exampleFormControlInput1" className="form-label">Address</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Address" />
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
  )
}

export default Patientsignup