import {createStore, combineReducers} from "redux";
import {cashReducer} from './reducers/cashReducer'
import {customerReducer} from './reducers/customersReducer'
import {todosReducer} from "./reducers/todosReducer";
import {applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga"
import saga from "../saga"

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({ // Объединяем наши редьюсеры
    // позволяет вместо того, чтобы создавать один огромный reducer для всего состояния
    // приложения сразу, разбивать его на отдельные модули
    cash: cashReducer, // Разбили на модуль с cashReducer и customReducer(теперь наши редьюсеры
    // называются cash и customers
    customers: customerReducer,
    todos: todosReducer
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(saga)