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
        <MDBValidation>
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
        </MDBValidation>
      </MDBCard>
    </div>
  )
}
export default AddEditAnimal