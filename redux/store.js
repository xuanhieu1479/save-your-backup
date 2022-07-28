import { configureStore } from "@reduxjs/toolkit";
import { userProfileReducer } from "./reducers";

const store = configureStore({
  reducer: {
    userProfile: userProfileReducer,
  },
});

export default store;
