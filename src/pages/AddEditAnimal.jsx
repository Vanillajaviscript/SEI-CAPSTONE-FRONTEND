import { useState } from "react"
import {
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBValidation,
  MDBBtn,
  MDBSpinner
} from "mdb-react-ui-kit";
import ChipInput from "material-ui-chip-input";
import FileBase from "react-file-base64"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { TextField } from "@material-ui/core";

const AddEditAnimal = () => {
  const initialState = {
    title: "",
    name: "",
    description: "",
  }
  const [animal, setAnimal] = useState(initialState);
  const {title, name, description} = initialState;

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  const onChange = () => {

  }
  const handleDelete = () => {

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
            invalid
            validation="Title Required"
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
            invalid
            validation="Description Required"
            />
          </div>
          <div className="d-flex justify-content-start">
            <FileBase type="file" multiple={false} onDone={(({base64}) => setAnimal({
              ...animal,
              imageFile: base64
            }))} />
          </div>
          <div className="col-12">
            <MDBBtn style={{width: "100%"}}>Submit</MDBBtn>
            <MDBBtn style={{width: "100%"}} className="mt-2" color="danger" onClick={handleDelete}>Delete</MDBBtn>
          </div>
        </MDBValidation>
        </MDBCardBody>
      </MDBCard>
    </div>
  )
}
export default AddEditAnimal