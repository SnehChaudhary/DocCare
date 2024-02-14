import { useContext, useEffect,useRef,useState } from 'react'
import contextAPI from '../context/ContextAPI'

const PatientProfile = () => {

    const {patientProfile,patientEdit} = useContext(contextAPI);
    const [patientDetail,setPatientDetail] = useState({});
    const refClose = useRef(null);

    useEffect(()=>{
        patientProfile().then((response)=>{

          console.log(response.birthDate)

          response.birthDate = response.birthDate.slice(0,10);
        
          setPatientDetail(response);
        })
    },[]);

    const onchange = (e) => {
      setPatientDetail({...patientDetail, [e.target.name] : e.target.value})
    }

    const updateDetail = (e) => {
      e.preventDefault();
      patientEdit(patientDetail);
      refClose.current.click();

      patientProfile().then((response)=>{

        console.log(response.birthDate)

        response.birthDate = response.birthDate.slice(0,10);
      
        setPatientDetail(response);})
    }

  const url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHH7mMDHH0S0oWu5HT4FiCTd900_jix22KWhOj6VDlww&s";

  return (
    <div className="card container" style={{height: "600px",width: "40%"}}>
      <img className="card-img-top border rounded-circle container my-3" src={url} alt="Card image cap" style={{height: "150px",width: "160px"}}/>
        <div className="card-body">
          <h5 className="card-title">{patientDetail.name}</h5>
          <p className="card-text">Contact Number: {patientDetail.contact}</p>
          <p className="card-text">Email ID: {patientDetail.emailId}</p>
          <p className="card-text">Gender: {patientDetail.gender}</p>
          <p className="card-text">Address: {patientDetail.address}</p>
          <p className="card-text">Birth Date: {patientDetail.birthDate}</p>
          <p className="card-text">Height: {patientDetail.height}</p>
          <p className="card-text">Weight: {patientDetail.weight}</p>
          <p className="card-text">Blood Group: {patientDetail.bloodGroup}</p> 
         
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Edit Profile
        </button>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Profile</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Contact</label>
                    <input type="text" class="form-control" name="contact" id="contact" value={patientDetail.contact} onChange={onchange} aria-describedby="emailHelp" />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Address</label>
                    <input type="text" class="form-control" name="address" id="address" value={patientDetail.address} onChange={onchange} />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Height</label>
                    <input type="text" class="form-control" name="height" id="height" value={patientDetail.height} onChange={onchange} />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Weight</label>
                    <input type="text" class="form-control" name="weight" id="weight" value={patientDetail.weight} onChange={onchange} />
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" ref={refClose} class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button disabled={(patientDetail.contact ? patientDetail.contact.length < 10:false) || (patientDetail.address ? patientDetail.address.length < 5 : false)} type="button" class="btn btn-primary" onClick={updateDetail}>Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PatientProfile