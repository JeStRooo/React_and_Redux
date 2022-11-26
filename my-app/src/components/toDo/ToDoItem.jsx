import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {Actions} from "../store/actions/Actions";
import styles from './ToDoItem.module.css';
import trash from '../icons/trash-icon.svg';
import edit from '../icons/edit-icon.svg'


const ToDoItem = ({number, todo, todos, ...props}) => {
    const [isEditValue, setIsEditValue] = useState(false)
    const [value, setValue] = useState(todo.title)

    const dispatch = useDispatch()

    const deleteTodo = (id) => {
        const newListTodo = todos.filter(todo => todo.id !== id)
        dispatch(Actions.deleteTodo(newListTodo))
    }

    const changeTodo = (id) => {
        setIsEditValue(!isEditValue)
        const newChangeTodo = todos.map(todo => todo.id !== id ? todo : {...todo, todos: value})
        dispatch((Actions.changeTodo(newChangeTodo)))
    }

    return (
        <div className={styles.todos}>
            <div className={styles.todo}>
                <input className={styles.todo__value}
                       readOnly={!isEditValue}
                       type="text"
                       value={String(value)}
                       onChange={e => setValue(e.target.value)}
                />
            </div>
            <div className={styles.icons}>
                <img className={styles.todo__icon}
                     title="Изменить"
                     onClick={changeTodo}
                     src={edit}
                     alt="edit"
                />
                <img className={styles.todo__icon}
                     title="Удалить"
                     onClick={()=>deleteTodo(todo.id)}
                     src={trash}
                     alt="trash"
                />
            </div>
        </div>
    );
};

export default ToDoItem;