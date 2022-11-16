import React, {useState} from 'react';
import {Actions} from "../store/actions/Actions";
import {useDispatch, useSelector} from "react-redux";
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import ToDoItem from "./ToDoItem";

import styles from "./ToDo.module.css"

const ToDo = () => {
    const [body, setBody] = useState('')

    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos.todos)

    const addNewTodo = () => {
        const todo = {
            body,
            id: Date.now(),
        }
        setBody('')
        dispatch(Actions.addTodo(todo))
    }

    return (
        <section className={styles.wrapper}>
            <div className={styles.form}>
                <MyInput
                    value={body}
                    onChange={e => setBody(e.target.value)}
                    type="text"
                    placeholder="Задача на сегодня"
                />
                <MyButton onClick={() => addNewTodo(todos)}>Создать пост</MyButton>
            </div>
            <div>
                {todos.length ?
                    <div className={styles.posts}>
                        {todos.map((todo, index) =>
                            <div className={styles.post}>
                                <ToDoItem todos={todos} todo={todo} number={index+1} key={todo.id}/>
                            </div>
                        )}
                    </div>
                    :
                    <div style={{fontSize: '2rem', marginTop:20, textAlign: 'center'}}>
                        Список задач отсутствует!
                    </div>
                }
            </div>
        </section>
    );
};

export default ToDo;