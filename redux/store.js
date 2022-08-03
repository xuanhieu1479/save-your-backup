import { configureStore } from "@reduxjs/toolkit";
import { USER_PROFILE } from "./constant";
import { userProfileReducer } from "./reducers";

const store = configureStore({
  reducer: {
    [USER_PROFILE]: userProfileReducer,
  },
});

export default store;
