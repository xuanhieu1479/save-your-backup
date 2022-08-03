import { createSlice } from "@reduxjs/toolkit";
import { USER_PROFILE } from "redux/constant";

const initialState = {
  loginBackgroundImage:
    "https://icatcare.org/app/uploads/2019/09/The-Kitten-Checklist-1.png",
};

export const userProfileSlice = createSlice({
  name: USER_PROFILE,
  initialState,
  reducers: {
    updateLoginBackgroundImage: (_, action) => action.payload,
  },
});

export const { updateLoginBackgroundImage } = userProfileSlice.actions;

export default userProfileSlice.reducer;
