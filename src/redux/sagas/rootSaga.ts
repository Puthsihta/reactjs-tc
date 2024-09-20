import { all } from "redux-saga/effects";
import { watchPost } from "./post.saga";

function* rootSaga() {
  yield all([watchPost()]);
}

export default rootSaga;
