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
import { login } from "../redux/features/authSlice";
import {GoogleLogin} from "react-google-login";

const Login = ({googleSignin}) => {
  const initialState = {
    email: "",
    password: "",
  }
  const [formState, setFormState] = useState(initialState);
  const {loading, error} = useSelector((state) => ({...state.auth}))
  const { email, password } = formState;

  //Dispatches Action to authSlice.js file
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  //Submit function for form
  const handleSubmit = (e) => {
    e.preventDefault();
    if(email && password) {
      //useDispatch to provide action to login and toastify to show successful message
      dispatch(login({formState, navigate, toast}));
    }
  };

  const onChange = (e) => {
    let {name, value} = e.target;
    setFormState({
      ...formState,
      [name]: value, 
    })
  };
  const googleSuccess = (res) => {
    const email = res?.profileObj?.email;
    const name = res?.profileObj?.name;
    const token = res?.token;
    const googleId = res?.googleId;
    const result = {email, name, token, googleId}
    dispatch(googleSignin({result, navigate, toast}))
  };

  const googleFailure = (error) => {
    toast.error(error)
  }
  return (
    <div
      style={{
        margin: "auto",
        marginTop: "120px",
        padding: "15px",
        maxWidth: "450px",
        alignContent: "center",
      }}
    >
      <MDBCard alignment="center">
        <MDBIcon fas icon="dog" className="fa-4x" />
        <h4>Login</h4>
        <MDBCardBody>
          <MDBValidation onSubmit={handleSubmit} noValidate className="row g-3">
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
              <MDBBtn style={{width: "100%"}} className="mt-2">
                {loading && (
                  <MDBSpinner
                  size="sm"
                  role="status"
                  tag="span"
                  className="me-2"
                  />
                )}
                Login
              </MDBBtn>
            </div>
          </MDBValidation>
          <br />
          <GoogleLogin
          clientId="19320938948-slbbudv3h1oolbebj1v4fmd62j82juqe.apps.googleusercontent.com"
          render={(renderProps) => (
            <MDBBtn 
              style={{width: "100%"}} 
              color="danger" 
              onClick={(renderProps.onClick)} 
              disabled={renderProps.disabled}
            >
                <MDBIcon style={{color: 'green'}} className="me-2" fab icon="google" />Sign in with Google
            </MDBBtn>
          )}
          onSuccess={googleSuccess}
          onFailure={googleFailure}
          cookiePolicy="single_host_origin"
          />
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