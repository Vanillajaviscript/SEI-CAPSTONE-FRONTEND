import { useState, useEffect } from "react"
import {
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBValidation,
  MDBBtn,
  MDBSpinner,
  MDBInput
} from "mdb-react-ui-kit";
import ChipInput from "material-ui-chip-input";
import FileBase from "react-file-base64"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createAnimal } from "../redux/api";

const AddEditAnimal = () => {
  const initialState = {
    title: "",
    name: "",
    description: "",
  }
  const [animal, setAnimal] = useState(initialState);
  const {error, loading} = useSelector((state) => ({...state.animal}));
  const { user } = useSelector((state) => ({ ...state.auth}));
  const dispatch = useDispatch();
  const {title, name, description} = animal;
  const navigate = useNavigate();

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(title && name && description) {
      const updatedAnimal = {...animal, name: user?.result?.name};
      dispatch(createAnimal({updatedAnimal, navigate, toast}));
      handleClear()
    }
  }
  const onChange = (e) => {
    const {name, value } = e.target;
    setAnimal({
      ...animal,
      [name]: value
    })
  }
  const handleClear = () => {

  }
  return (
    <div style={{
      margin: "auto",
      padding: "15px",
      maxWidth: "450px",
      alignContent: "center",
      marginTop: "120px",
    }} className="container">
      <MDBCard alignment="center">
        <h5>Add Animal</h5>
        <MDBCardBody>
        <MDBValidation onSubmit={handleSubmit} className="row g-3" noValidate>
          <div className="col-md-12">
            <input placeholder="title"
            type="text"
            value={title}
            name="title"
            onChange={onChange}
            className="form-control"
            required
            invalid={MDBInput.invalid}
            />
          </div>
          <div className="col-md-12">
            <input placeholder="name"
            type="name"
            value={name}
            name="name"
            onChange={onChange}
            className="form-control"
            required
            invalid
            validation="Name Required"
            />
          </div>
          <div className="col-md-12">
            <textarea placeholder="description"
            type="text"
            style={{height: "100px"}}
            value={description}
            name="description"
            onChange={onChange}
            className="form-control"
            required
            invalid={MDBInput.invalid}
            />
          </div>
          <div className="d-flex justify-content-start">
            <FileBase 
            type="file" 
            multiple={false} 
            onDone={({base64}) => setAnimal({...animal, imageFile: base64})
            } 
          />
          </div>
          <div className="col-12">
            <MDBBtn style={{width: "100%"}}>Submit</MDBBtn>
            <MDBBtn style={{width: "100%"}} className="mt-2" color="danger" onClick={handleClear}>Clear</MDBBtn>
          </div>
        </MDBValidation>
        </MDBCardBody>
      </MDBCard>
    </div>
  )
}
export default AddEditAnimal
//////////////////////////////////////////////////
