import React, { useState, useEffect } from "react";
import { 
  MDBCard, 
  MDBCardBody, 
  MDBInput,
  MDBCardFooter,
  MDBValidation, 
  MDBBtn,
  MDBIcon,
  MDBSpinner
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";


const Login = () => {
  const initialState = {
    email: "",
    password: "",
  }
  const [formState, setFormState] = useState(initialState);
  const { email, password } = formState
  const handleSubmit = (e) => {
    
  }
  return (
    <div
      style={{
        margin: "auto",
        marginTop: "120px",
        padding: "15px",
        maxWidth: "450px",
        alignContent: "center"
      }}
    >
      <MDBCard alignment="center">
        <MDBIcon fas icon="user-circle" className="fa-2x" />
        <h4>Sign In</h4>
        <MDBCardBody>
          <MDBValidation onSubmit={handleSubmit} noValidate className="row g-3">
            
          </MDBValidation>
        </MDBCardBody>
      </MDBCard>
    </div>
  )
}
export default Login