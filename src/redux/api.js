import axios from "axios";



const url = "http://localhost:3001";
const API = axios.create({
  baseURL: url,
  timeout: 30000,
});

API.interceptors.request.use((req) => {
  if(localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
    JSON.parse(localStorage.getItem("profile")).token}`
  }
  return req
})

export const signIn = (formData) => API.post("/users/signin", formData);
export const signUp = (formData => API.post("/users/signup", formData));
export const createAnimal = (animal) => API.post("/animal", animal)