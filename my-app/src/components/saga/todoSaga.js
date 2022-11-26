import {takeEvery, put, call} from 'redux-saga/effects';
import {Actions, FETCH_TODOS} from "../store/actions/Actions";

function* fetchTodosWorker() {
    try {
        const data = yield fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
        const response =  () => new Promise(res => res(data.json()))
        const json = yield call(response)
        yield put(Actions.addApiTodos(json))
    } catch (error) {
        console.log(error)
    }
}

export function* todosWatcher() {
   yield takeEvery(FETCH_TODOS, fetchTodosWorker)
}