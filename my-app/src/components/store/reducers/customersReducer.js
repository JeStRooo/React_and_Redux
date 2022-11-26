import {ADD_CUSTOMER, REMOVE_CUSTOMER, ADD_API_CUSTOMERS} from "../actions/Actions";

const defaultState = {
    customers: [],
}

export const customerReducer = (state = defaultState, action) => {
    switch (action.type) {
            // Через деструктуризацию мы в новый объект, разворачиваем старый, а затем
            // мы в нём к старому значению customers добавляем новое, из payload
        case ADD_CUSTOMER:
            return {...state, customers: [...state.customers, action.payload]}
        case ADD_API_CUSTOMERS:
            return {...state, customers: [...state.customers, ...action.payload]}
        case REMOVE_CUSTOMER:
            return {...state, customers: action.payload}
        default:
            return state
    }
}

