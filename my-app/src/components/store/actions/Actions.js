export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const CHANGE_TODO = 'CHANGE_TODO'
export const ADD_CUSTOMER = 'ADD_CUSTOMER'
export const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER'
export const FETCH_CUSTOMERS = 'FETCH_CUSTOMERS'
export const FETCH_TODOS = 'FETCH_TODOS'
export const FETCH_POSTS = 'FETCH_POSTS'
export const ADD_API_CUSTOMERS = 'ADD_API_CUSTOMERS'
export const ADD_API_TODOS = 'ADD_API_TODOS'
export const ADD_API_POSTS = 'ADD_API_POSTS'

export const Actions = {
    addTodo: (payload) => ({
        type: ADD_TODO,
        payload,
    }),
    deleteTodo: (payload) => ({
        type: DELETE_TODO,
        payload
    }),
    changeTodo: (payload) => ({
        type: CHANGE_TODO,
        payload
    }),
    addCustomer: (payload) => ({
        type: ADD_CUSTOMER,
        payload
    }),
    removeCustomerAction: (payload) => ({
        type: REMOVE_CUSTOMER,
        payload
    }),
    fetchCustomer: () => ({
        type: FETCH_CUSTOMERS,
    }),
    fetchTodo: () => ({
        type: FETCH_TODOS,
    }),
    fetchPost: () => ({
        type: FETCH_POSTS,
    }),
    addApiCustomers: (payload) => ({
        type: ADD_API_CUSTOMERS,
        payload
    }),
    addApiTodos: (payload) => ({
        type: ADD_API_TODOS,
        payload
    }),
    addApiPosts: (payload) => ({
        type: ADD_API_POSTS,
        payload
    }),
}