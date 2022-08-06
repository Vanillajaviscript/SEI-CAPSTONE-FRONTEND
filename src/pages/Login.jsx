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
    <div>
      <h5>Sign</h5>
      <form onSubmit={handleSubmit}></form>
    </div>
  )
}
export default Login