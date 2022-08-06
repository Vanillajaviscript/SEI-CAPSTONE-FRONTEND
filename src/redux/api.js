import axios from "axios";


// const url = "https://full-crud-dogs--mern.herokuapp.com/dogs/";
const url = "http://localhost:3001"
const API = axios.create({
  baseURL: url,
});

export const signIn = (formData) => {
  API.post("/users/signin", formData)
}