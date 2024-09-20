import { createAction } from "@reduxjs/toolkit";
import { PostType } from "../type";

const requestPost = createAction("post/request");
const requestPostSuccess = createAction<PostType[] | null>("post/success");
const requestPostError = createAction<string>("post/error");

export { requestPost, requestPostSuccess, requestPostError };
