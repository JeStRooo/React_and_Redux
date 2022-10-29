const defaultState = {
    cash: 0,
}

const ADD_CASH = 'ADD_CASH' // Всегда стоит выносить в const - чтобы допускать меньше ошибок
const GET_CASH = 'GET_CASH'

export const cashReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_CASH:
            return {...state, cash: state.cash + action.payload} // Через диструктуризацию добавляем
                // к старому массиву, новое значение к ключу cash.
            // state.cash - наше уже имеющееся значение, а action.payload - наше введённое значение
        case GET_CASH:
            return {...state, cash: state.cash - action.payload}
        default:
            return state // Иначе возвращаем наше исходное значение
    }
}
