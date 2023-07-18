import React from "react";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "@firebase/auth";
import { auth } from "../firebase";
import { dataForm } from "../data";
import { persistStore } from "redux-persist";
import store from ".";

const initialState: {
  data: dataForm[];
} = {
  data: [],
};
export const register = createAsyncThunk<any, any>(
  "user/register",
  async ({ login, password }, { rejectWithValue }) => {
    try {
      await createUserWithEmailAndPassword(auth, login, password);
    } catch (error) {
      return rejectWithValue("Something went wrong");
    }
  }
);
// export const loginPage = createAsyncThunk<any, any>(
//   "user/loginPage",
//   async ({ login, password }, { rejectWithValue }) => {
//     try {
//       await signInWithEmailAndPassword(auth, login, password);
//     } catch (error) {
//       return rejectWithValue("Something went wrong");
//     }
//   }
// );
const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setFoot: (state, actions) => {
      state.data.push(actions.payload);
    },
    filterFood: (state, actions) => {
      state.data = state.data.filter((e) => e.id !== actions.payload);
    },
  },
});
export const selectCurrentData = (state: RootState) => state.data.data;

export const { setFoot, filterFood } = dataSlice.actions;
export default dataSlice.reducer;
