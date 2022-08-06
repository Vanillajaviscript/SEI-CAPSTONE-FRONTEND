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
    e.preventDefault();

  };
  const onChange = (e) => {
    let {name, value} = e.target;
    setFormState({
      ...formState,
      [name]: value, 
    })
    if(!e.target) {
      return <h1>Please enter email</h1>
    }
  };
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
            <div>
              <MDBInput
                label="Email"
                type="email"
                value={email}
                name="email"
                onChange={onChange}
                required
                invalid={MDBInput.invalid}
              />
            </div>
            <div>
              <MDBInput
                label="Password"
                type="password"
                value={password}
                name="password"
                onChange={onChange}
                required
                invalid={MDBInput.invalid}
              />
            </div>
            <div className="col-12">
              <MDBBtn style={{width: "100%"}} className="mt-2">
                Login
              </MDBBtn>
            </div>
          </MDBValidation>
        </MDBCardBody>
        <MDBCardFooter>
          <Link to="/register">
            <p>Don't have an account? Sign Up</p>
          </Link>
        </MDBCardFooter>
      </MDBCard>
    </div>
  )
}
export default Login