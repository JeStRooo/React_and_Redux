import {takeEvery, put, call} from 'redux-saga/effects'

import {Actions, FETCH_CUSTOMERS} from "../store/actions/Actions";

const delay = (ms) => new Promise(res => setTimeout(res, ms));

function* fetchCustomersWorker() {
    try {
        const data = yield fetch('https://jsonplaceholder.typicode.com/users')
        const response = () => new Promise(res => res(data.json()))
        const json = yield call(response)
        yield put(Actions.addApiCustomers(json))
        console.log(json)
    } catch (error) {
        console.log(error)
    }
}

export function* userWatcher() {
    yield takeEvery(FETCH_CUSTOMERS, fetchCustomersWorker)
}