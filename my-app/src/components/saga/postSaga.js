import {takeEvery, put, call} from "redux-saga/effects"
import {Actions, FETCH_POSTS} from "../store/actions/Actions";

function* fetchPostWorker() {
    try {
        const data = yield fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
        const response = () => new Promise(res => res(data.json()))
        const json = yield call(response)
        put(Actions.addApiPosts(json))
    } catch (error) {
        console.log(error)
    }
}
export function* postsWatcher() {
    takeEvery(FETCH_POSTS, fetchPostWorker)
}