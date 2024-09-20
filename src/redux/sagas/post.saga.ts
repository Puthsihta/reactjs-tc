import { put, takeLatest } from "redux-saga/effects";
import { requestPost, requestPostSuccess } from "../actions/post.action";
import axios, { AxiosResponse } from "axios";
import { PostType } from "../type";

function* fetchPosts() {
  try {
    const response: AxiosResponse<PostType[]> = yield axios.get(
      `https://jsonplaceholder.typicode.com/posts`
    );
    yield put(requestPostSuccess(response.data));
  } catch (error) {
    // yield put(requestPostError(error));
  }
}
export function* watchPost() {
  yield takeLatest(requestPost.type, fetchPosts);
}
