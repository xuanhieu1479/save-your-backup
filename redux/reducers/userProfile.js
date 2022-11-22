import { createSlice } from "@reduxjs/toolkit";

import { USER_PROFILE } from "redux/constant";

const initialState = {
  email: "",
  name: "",
  backgroundImage: "",
};

export const userProfileSlice = createSlice({
  name: USER_PROFILE,
  initialState,
  reducers: {
    updateUserProfile: (state, action) => ({ ...state, ...action.payload }),
  },
});

export const { updateUserProfile } = userProfileSlice.actions;

export default userProfileSlice.reducer;
