export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const CHANGE_TODO = 'CHANGE_TODO'
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
    })
}