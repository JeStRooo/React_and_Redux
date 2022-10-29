import React, {useEffect, useLayoutEffect, useState} from 'react';
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import ToDoItem from "./ToDoItem";

import styles from "./ToDo.module.css"

const ToDo = (props) => {
    const initialState = JSON.parse(localStorage.getItem('posts')) || []
    const [posts, setPosts] = useState(initialState) // Не желательно писать логику в состоянии
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    useEffect(() => {
        localStorage.setItem('posts', JSON.stringify(posts))
    }, [posts])

    const addApiPosts = (e) => {
        e.preventDefault()
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => setPosts(prevState => [...prevState, ...posts]))
    }
    // СДЕЛАТЬ РЕДАКТИРОВАНИЕ ПОСТОВ
    const addNewPost = (e) => {
        e.preventDefault()
        setPosts([
            ...posts, //
            {
                id: Date.now(),
                title: title,
                body: body,
            }
        ])
        setTitle('')
        setBody('')
    }

    // const deletePost = () => {
    //     setPosts(posts.filter(el => el.id !== post.id))
    // }

    // const changePost = (post) => {
    //     setPosts(posts.filter(el => el.target.value))
    // }

    return (
        <section className={styles.wrapper}>
            <form className={styles.form}>
                {/*Управляемый компонент*/}
                <MyInput
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type="text"
                    placeholder="Название поста"
                />
                <MyInput
                    value={body}
                    onChange={e => setBody(e.target.value)}
                    type="text"
                    placeholder="Автор"
                />
                <MyButton onClick={addNewPost}>Создать пост</MyButton>
                <MyButton onClick={addApiPosts}>Загрузить посты с API</MyButton>
            </form>
            <div className={styles.posts}>
                {posts.map((post, index) =>
                    <div className={styles.post}> {/*если больше одного, то ставим div*/}
                        <ToDoItem setPosts={setPosts} number={index + 1} post={post} key={post.id}/>
                        {/*<MyButton onClick={() => deletePost(post)}>Удалить пост</MyButton>*/}
                        {/*<MyButton onClick={() => changePost(post)}>Изменить пост</MyButton>*/}
                    </div>
                )}
            </div>
        </section>
    );
};

export default ToDo;