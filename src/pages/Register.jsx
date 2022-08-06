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
import { Link, useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { toast } from "react-toastify";
import { register } from "../redux/features/authSlice";

const Register = () => {
  const initialState = {
    firsName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  }
  const [formState, setFormState] = useState(initialState);
  const {loading, error} = useSelector((state) => ({...state.auth}))
  const { firstName, lastName, email, password, confirmPassword } = formState;

  //Dispatches Action to authSlice.js file
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  //Submit function for form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword){
      return toast.error("Both passwords need to match!")
    } 
    if (email && password && firstName && lastName) {
      //useDispatch to provide action to register and toastify to show successful message
      dispatch(register({formState, navigate, toast}));
    } 
  };

  const onChange = (e) => {
    let {name, value} = e.target;
    setFormState({
      ...formState,
      [name]: value, 
    })
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
        <MDBIcon fas icon="paw" className="fa-4x" />
        <h4>Register</h4>
        <MDBCardBody>
          <MDBValidation onSubmit={handleSubmit} noValidate className="row g-3">
          <div className="col-md-12">
              <MDBInput
                label="First Name"
                type="text"
                value={firstName}
                name="firstName"
                onChange={onChange}
                required
                invalid={MDBInput.invalid}
              />
            </div>
            <div className="col-md-12">
              <MDBInput
                label="Last Name"
                type="text"
                value={lastName}
                name="lastName"
                onChange={onChange}
                required
                invalid={MDBInput.invalid}
              />
            </div>
            <div className="col-md-12">
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
            <div className="col-md-12">
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
            <div className="col-md-12">
              <MDBInput
                label="Confirm Password"
                type="password"
                value={confirmPassword}
                name="confirmPassword"
                onChange={onChange}
                required
                invalid={MDBInput.invalid}
              />
            </div>
            <div className="col-md-12">
              <MDBBtn style={{width: "100%"}} className="mt-2">
                {loading && (
                  <MDBSpinner
                  size="sm"
                  role="status"
                  tag="span"
                  className="me-2"
                  />
                )}
                Register
              </MDBBtn>
            </div>
          </MDBValidation>
        </MDBCardBody>
        <MDBCardFooter>
          <Link to="/login">
            <p>Already have an account? Then why are you even here?</p>
          </Link>
        </MDBCardFooter>
      </MDBCard>
    </div>
  )
}
export default Register