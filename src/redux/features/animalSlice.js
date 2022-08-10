import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const createAnimal = createAsyncThunk(
  "animal/createanimal", 
  async ({updatedAnimal, navigate, toast}, {rejectWithValue}) => {
  try {
    const response = await api.createAnimal(updatedAnimal);
    toast.success("Animal Created!");
    navigate("/");
    return response.data;
  } catch(error) {
    return rejectWithValue(error.response.data);
  }
});

// export const getAnimals = createAsyncThunk(
//   "animal/getAnimals", 
//   async (_, {rejectWithValue}) => {
//   try {
//     const response = await api.getAnimals();
//     return response.data;
//   } catch(error) {
//     return rejectWithValue(error.response.data);
//   }
// });

const animalSlice = createSlice({
  name: "animal",
  initialState: {
    animal: {},
    animals: [],
    //animals that belong to logged in user
    userAnimals: [],
    error: "",
    loading: false
  },
  extraReducers: {
    [createAnimal.pending]: (state, action) => {
      state.loading = true
    },
    [createAnimal.fulfilled]: (state, action) => {
      state.loading = false;
      state.animals = [action.payload];
    },
    [createAnimal.rejected]: (state, action) => {
      state.loading = false;
      //Message refers to animal controller error message
      state.error = action.payload.message;
    },
    // [getAnimals.pending]: (state, action) => {
    //   state.loading = true
    // },
    // [getAnimals.fulfilled]: (state, action) => {
    //   state.loading = false;
    //   state.animals = [action.payload];
    // },
    // [getAnimals.rejected]: (state, action) => {
    //   state.loading = false;
    //   //Message refers to animal controller error message
    //   state.error = action.payload.message;
    // },
  },
});

export default animalSlice.reducer;

