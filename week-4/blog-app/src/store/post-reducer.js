import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "posts",
  initialState: [
    {
      title: "initial",
    },
  ],
  reducers: {
    createPost: (state, data) => {
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 10000000),
          ...data.payload,
        },
      ];
    },
  },
});

export const postActions = postSlice.actions;

export default postSlice.reducer;
