import './App.css';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NavBar from "./components/NavBar";
import { useDispatch } from 'react-redux';
import { setUser } from './redux/features/authSlice';
import AddEditAnimal from './pages/AddEditAnimal';

const App = () => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  useEffect(() => {
    dispatch(setUser(user));
  }, [])
  return (
  <Router>
    <div className="App">
      <NavBar />
      <ToastContainer position='top-left' />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/createanimal" element={<AddEditAnimal />} />
        <Route path="/editanimal/:id" element={<AddEditAnimal />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
