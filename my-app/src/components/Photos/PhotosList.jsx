import React from 'react';
import Photo from "./Photo";
import {useState} from "react";
import styles from "./PhotosList.module.css";
import MyButton from "../UI/button/MyButton";

const PhotosList = () => {
    const [posts, setPosts] = useState([])
    const addPosts = (e) => {
        e.preventDefault()
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res => res.json())
            .then(data => setPosts(prevState => [...prevState, ...data]))
    }
    const deletePosts = (e) => {
        e.preventDefault()
        setPosts([])
    }
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //             .then(res => res.json())
    //             .then(data => setPosts(prevState => [...prevState, ...data]))
    //     }
    //     ,[])

    return (
        <main className="main">
            <h1 className={styles.title}>Список постов</h1>
            <div className={styles.buttons}>
                <MyButton onClick={addPosts}>Создать посты</MyButton>
                <MyButton onClick={deletePosts}>Удалить посты</MyButton>
            </div>
            <div className={styles.posts}>
                {posts.map(post =>
                    <Photo title='Список постов' post={post} key={post.id}/>
                )}
            </div>
        </main>
    );
};
export default PhotosList;