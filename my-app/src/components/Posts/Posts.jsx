import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import PostItem from "./PostItem";
import styles from "./Posts.module.css"

const Posts = () => {
    const initialState = JSON.parse(localStorage.getItem('posts')) || []
    const [posts, setPosts] = useState(initialState) // Не желательно писать логику в состоянии

    useEffect(() => {
        localStorage.setItem('posts', JSON.stringify(posts))
    }, [posts])

    // const addApiPosts = () => {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then(res => res.json())
    //         .then(posts => setPosts(prevState => [...prevState, ...posts]))
    // }

    // const addNewPost = () => {
    //     setPosts([
    //         ...posts,
    //         {
    //             id: Date.now(),
    //             title: title,
    //             body: body,
    //         }
    //     ])
    //     setTitle('')
    //     setBody('')
    // }

    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({
        mode: 'onBlur'
    });
    console.log(posts)
    const onSubmit = (data) => {
        setPosts([
            ...posts,
            {
                id: Date.now(),
                post: data.post,
                author: data.author
            }
        ])
        reset();
    }

    return (
        <section className={styles.wrapper}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                {/*Управляемый компонент*/}
                <input className={styles.form__input}
                       {...register('post', {
                           required: 'Поле не должно быть пустым!',
                           minLength: {
                               value: 2,
                               message: 'Должно быть минимум 2 символа!'
                           },
                           pattern: {
                               value: /^[0-9A-ZА-ЯЁ]+$/i,
                               message: 'Вы ввели неправильные символы!'
                           }
                       })}
                       type="text"
                       placeholder="Название поста"
                />
                {errors?.post && <div style={{color: 'red'}}>{errors?.post?.message || 'Ошибка!'}</div>}
                <input className={styles.form__input}
                       {...register('author', {
                           required: 'Поле не должно быть пустым!',
                           minLength: {
                               value: 2,
                               message: 'Должно быть минимум 2 символа!'
                           },
                           maxLength: {
                               value: 30,
                               message: 'Имя автора должно быть не более 30 символов!'
                           },
                           pattern: {
                               value: /^(?!.*\.\.)(?!\.)(?!.*\.$)(?!\d+$)[a-zA-Z0-9.]/,
                               message: 'Неправильно ввели имя автора!'
                           }
                       })}
                       type="text"
                       placeholder="Автор"
                />
                {errors?.author && <div style={{color: 'red'}}>{errors?.author?.message || 'Ошибка!'}</div>}
                <input value="Создать пост" className={styles.form__button} type="submit" disabled={!isValid}/>
                {/*<MyButton onClick={addNewPost}>Создать пост</MyButton>*/}
                {/*<MyButton onClick={addApiPosts}>Загрузить посты с API</MyButton>*/}
            </form>
            {/*<MyButton onClick>Загрузить посты с API</MyButton>*/}
            <div className={styles.posts}>
                {posts.map((post, index) =>
                    <div className={styles.post}> {/*если больше одного, то ставим div*/}
                        <PostItem setPosts={setPosts} number={index + 1} post={post} key={post.id}/>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Posts;