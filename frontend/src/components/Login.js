import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="container my-5">
      <div className="card container w-25">
        <h4 className='card-title mx-auto mt-3'> Login As </h4>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group my-3">
              <Link role="button" type="button" class="btn btn-primary" to='/login/hospital'>
                Hospital
              </Link>
            </li>
            <li className="list-group my-3">
              <Link role="button" type="button" class="btn btn-primary" to='/login/doctor'>
                Doctor
              </Link>
            </li>
            <li className="list-group my-3">
              <Link role="button" type="button" class="btn btn-primary" to='/login/patient'>
                Patient
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Login
