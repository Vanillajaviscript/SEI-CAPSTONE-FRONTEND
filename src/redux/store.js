import {configureStore} from "@reduxjs/toolkit";
import AuthReducer from "./features/authSlice";
import AnimalReducer from "./features/animalSlice";


export default configureStore({
  reducer: {
    auth: AuthReducer,
    animal: AnimalReducer,
  },
});


