import {all} from 'redux-saga/effects'
import {userWatcher} from "./userSaga";
import {todosWatcher} from './todoSaga'
import {postsWatcher} from "./postSaga";

export default function* rootSaga() {
    yield all([userWatcher(), todosWatcher(), postsWatcher()])
}