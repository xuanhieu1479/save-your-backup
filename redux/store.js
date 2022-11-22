import { configureStore } from "@reduxjs/toolkit";

import { USER_PROFILE, STATUS } from "./constant";
import { userProfileReducer, statusReducer } from "./reducers";

const store = configureStore({
  reducer: {
    [USER_PROFILE]: userProfileReducer,
    [STATUS]: statusReducer,
  },
});

export default store;
