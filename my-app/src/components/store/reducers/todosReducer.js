import {ADD_TODO, CHANGE_TODO, DELETE_TODO, ADD_API_TODOS} from "../actions/Actions";

const initialState = {
    todos: []
}

export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {...state, todos: [...state.todos, action.payload]}
        case DELETE_TODO:
            return {...state, todos: action.payload}
        case CHANGE_TODO:
            return {...state, todos: action.payload}
        case ADD_API_TODOS:
            return {...state, todos: [...state.todos, ...action.payload]}
        default:
            return state
    }
}

