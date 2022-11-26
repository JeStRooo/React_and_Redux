import React, {useEffect, useState} from 'react';
import {Actions} from "../store/actions/Actions";
import {useDispatch, useSelector} from "react-redux";
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import ToDoItem from "./ToDoItem";

import styles from "./ToDo.module.css"

const ToDo = () => {
    const [title, setTitle] = useState('')
    const [isFocus, setIsFocus] = useState(true)
    const [isValid, setIsValid] = useState(false)

    // useEffect(() => {
    //     localStorage.setItem('todos', JSON.stringify(todos))
    // }, [todos])

    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos.todos)
    
    const messageError = 'Поле не должно быть пустым!'

    useEffect(() => {
        setIsValid(!!title.length)
    }, [title])

    const addNewTodo = () => {
        const todo = {
            title,
            id: Date.now(),
        }
        setTitle('')
        setIsFocus(true)
        setIsValid(false)
        dispatch(Actions.addTodo(todo))
    }

    const bodyHandler = (e) => {
        setIsValid(!!e.target.value.length)
        setTitle(e.target.value)
    }

    return (
        <section className={styles.wrapper}>
            <div className={styles.form}>
                <MyInput
                    value={title}
                    onBlur={() => setIsFocus(false)}
                    name='body'
                    onChange={e => bodyHandler(e)}
                    onFocus={() => setIsFocus(true)}
                    type="text"
                    placeholder="Задача на сегодня"
                />
                {(!isFocus && !isValid) && <div style={{color: "red"}}>{messageError}</div>}
                <MyButton disabled={!isValid} onClick={() => addNewTodo(todos)}>Добавить задание</MyButton>
                <MyButton onClick={() => dispatch(Actions.fetchTodo())}>Добавить задания с API</MyButton>
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