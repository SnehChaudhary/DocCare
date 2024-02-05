import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import Hospitalsignup from './components/Hospitalsignup';
import Doctorsignup from './components/Doctorsignup';
import Patientsignup from './components/Patientsignup';
import Hospitallogin from './components/Hospitallogin';
import Doctorlogin from './components/Doctorlogin';
import Patientlogin from './components/Patientlogin';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signup/hospital' element={<Hospitalsignup />} />
          <Route path='/signup/doctor' element={<Doctorsignup />} />
          <Route path='/signup/patient' element={<Patientsignup />} />
          <Route path='/login/hospital' element={<Hospitallogin />} />
          <Route path='/login/doctor' element={<Doctorlogin />} />
          <Route path='/login/patient' element={<Patientlogin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
