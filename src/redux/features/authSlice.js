import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api"

//async destructure state and useNavigate from login page
export const login = createAsyncThunk("auth/login", async({formState, navigate, toast}) => {
  try {
    const res = await api.signIn(formState);
    toast.success("Login Successful!");
    navigate("/");
    return res.data;
  } catch(error) {
    console.log(error)
  }
})
const user = JSON.parse(localStorage.getItem('user'))
const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem('token'),
    user: user ? user : null,
    error: "",
    loading: false
  },
  extraReducers: {
    [login.pending]: (state, action) => {
      state.loading = true
    },
    [login.fulfilled]: (state, action) => {
      state.loading = false;
      //setItem() adds a key and a value to localstorage
      localStorage.setItem("profile", JSON.stringify({...action.payload}));
      state.user = action.payload
    },
    [login.rejected]: (state, action) => {
      state.loading = false;
      //Message refers to user controller error message
      state.error = action.payload.message;
    }
  }
})

export default authSlice.reducer;
