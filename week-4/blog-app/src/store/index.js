import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./post-reducer";

export const store = configureStore({
  reducer: {
    posts: postSlice,
  },
});
