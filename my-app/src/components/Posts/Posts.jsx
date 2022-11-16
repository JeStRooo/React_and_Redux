import React, {useEffect, useState} from 'react';
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import PostItem from "./PostItem";

import styles from "./Posts.module.css"

const Posts = () => {
    const initialState = JSON.parse(localStorage.getItem('posts')) || []
    const [posts, setPosts] = useState(initialState) // Не желательно писать логику в состоянии
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    useEffect(() => {
        localStorage.setItem('posts', JSON.stringify(posts))
    }, [posts])

    const addApiPosts = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => setPosts(prevState => [...prevState, ...posts]))
    }

    const addNewPost = () => {
        setPosts([
            ...posts,
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
            <div className={styles.form}>
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
            </div>
            <div className={styles.posts}>
                {posts.map((post, index) =>
                    <div className={styles.post}> {/*если больше одного, то ставим div*/}
                        <PostItem setPosts={setPosts} number={index + 1} post={post} key={post.id}/>
                        {/*<MyButton onClick={() => deletePost(post)}>Удалить пост</MyButton>*/}
                        {/*<MyButton onClick={() => changePost(post)}>Изменить пост</MyButton>*/}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Posts;