const defaultState = {
    customers: [],
}

const ADD_CUSTOMER = 'ADD_CUSTOMER'
const REMOVE_CUSTOMERS = 'REMOVE_CUSTOMERS'
const ADD_MANY_CUSTOMERS = 'ADD_MANY_CUSTOMERS'

export const customerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_MANY_CUSTOMERS:
            // Через деструктуризацию мы в новый объект, разворачиваем старый, а затем
            // мы в нём к старому значению customers добавляем новое, из payload
            return {...state, customers:  [...state.customers, ...action.payload]}
        case ADD_CUSTOMER:
            return {...state, customers: [...state.customers, action.payload]}
        case REMOVE_CUSTOMERS:
            return {...state, customers: state.customers.filter(customer => customer.id !== action.payload)}
        default:
            return state
    }
}
// Вывводим всё в отдельные функции, для лучшей читабельности кода
export const addCustomerAction = (payload) => ({type: ADD_CUSTOMER, payload})
export const addManyCustomersAction = (payload) => ({type: ADD_MANY_CUSTOMERS, payload})
export const removeCustomerAction = (payload) => ({type: REMOVE_CUSTOMERS, payload})
