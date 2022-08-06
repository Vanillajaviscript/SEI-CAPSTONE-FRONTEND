import axios from "axios";


// const url = "https://full-crud-dogs--mern.herokuapp.com/dogs/";
const url = "http://localhost:3001";
const API = axios.create({
  baseURL: url,
  timeout: 30000,
});

export const signIn = (formData) => API.post("/users/signin", formData);
export const signUp = (formData => API.post("/users/signup", formData));
export const googleSignin = (result) => API.post("/users/googleSignin", result)