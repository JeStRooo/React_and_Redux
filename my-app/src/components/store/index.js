import {createStore, combineReducers, applyMiddleware} from "redux";
import {cashReducer} from './cashReducer'
import {customerReducer} from './customersReducer'
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk';


const rootReducer = combineReducers({ // Объединяем наши редьюсеры
    // позволяет вместо того, чтобы создавать один огромный reducer для всего состояния
    // приложения сразу, разбивать его на отдельные модули
    cash: cashReducer, // Разбили на модуль с cashReducer и customReducer(теперь наши редьюсеры
    // называются cash и customers
    customers: customerReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk))) // Первым
// значением добавляем наши редьюсеры, вторым значением - меню разработчика