import { configureStore } from "@reduxjs/toolkit";
import user from "./slice/user.slice";
const store = configureStore({
  reducer: {
    user,
    // posts: postsReducer,
  },
});

export default store;
