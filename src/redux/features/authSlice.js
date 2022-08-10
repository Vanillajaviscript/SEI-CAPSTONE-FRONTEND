import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api"

//async destructure state and useNavigate from login page/ create action (createasyncthunk)
export const login = createAsyncThunk("auth/login", async({formState, navigate, toast}, {rejectWithValue}) => {
  try {
    const response = await (api.signIn(formState));
    toast.success("Login Successful!");
    navigate("/");
    return response.data;
  } catch(error) {
    return rejectWithValue(error.response.data);
  }
});

export const register = createAsyncThunk("auth/register", async({formState, navigate, toast}, {rejectWithValue}) => {
  try {
    const response = await api.signUp(formState);
    toast.success("You are now registered!");
    navigate("/");
    return response.data;
  } catch(error) {
    return rejectWithValue(error.response.data);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    error: "",
    loading: false
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLogout: (state, action) => {
      localStorage.clear();
      state.user = null;
    }
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
    },
    [register.pending]: (state, action) => {
      state.loading = true
    },
    [register.fulfilled]: (state, action) => {
      state.loading = false;
      //setItem() adds a key and a value to localstorage
      localStorage.setItem("profile", JSON.stringify({...action.payload}));
      state.user = action.payload
    },
    [register.rejected]: (state, action) => {
      state.loading = false;
      //Message refers to user controller error message
      state.error = action.payload.message;
    },
  },
});

export const { setUser, setLogout } = authSlice.actions;

export default authSlice.reducer;
