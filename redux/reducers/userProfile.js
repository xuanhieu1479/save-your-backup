import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginBackgroundImage: "",
};

export const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    updateLoginBackgroundImage: (_, action) => action.payload,
  },
});

export const { updateLoginBackgroundImage } = userProfileSlice.actions;

export default userProfileSlice.reducer;
