import { createReducer } from "@reduxjs/toolkit";
import { PostTypeData } from "../type";
import {
  requestPost,
  requestPostError,
  requestPostSuccess,
} from "../actions/post.action";

const initialState: PostTypeData = {
  data: [],
  isLoading: false,
  errors: "",
};

const postReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(requestPost, (state) => {
      state.isLoading = true;
    })
    .addCase(requestPostSuccess, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    })
    .addCase(requestPostError, (state, action) => {
      state.isLoading = false;
      state.errors = action.payload;
    });
});

export { postReducer };
