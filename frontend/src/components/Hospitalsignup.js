import React from 'react'

const Hospitalsignup = () => {
  return (
    <div className='container my-3 fw-bold'>
    <form>
      <div className="row">
        <div className="mb-3 col-md-6">
          <label for="exampleFormControlInput1" className="form-label">Name</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name" />
        </div>
        <div className="mb-3 col-md-6">
          <label for="exampleFormControlInput1" className="form-label">Address</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Address" />
        </div>
      </div>
      <div className="row">
        <div className="mb-3 col-md-6">
          <label for="exampleFormControlInput1" className="form-label">Secret Key</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email" />
        </div>
        <div className="mb-3 col-md-6">
          <label for="exampleFormControlInput1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="Password" />
        </div>
      </div>
      <div className="row">
        <div className="mb-3 col-md-6">
          <label for="exampleFormControlInput1" className="form-label">Contact</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Contact" />
        </div>
        <div className="mb-3 col-md-6">
          <label for="exampleFormControlInput1" className="form-label">Total Patient</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Count" />
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
  )
}

export default Hospitalsignup
