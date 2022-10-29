import React, {useState} from 'react';
import styles from "./ToDoItem.module.css";
import trash from "../icons/trash-icon.svg";
import edit from "../icons/edit-icon.svg"

const ToDoItem = ({post, number, setPosts, ...props}) => { // Получаем через пропсы нужные данные
    const [isEditValue, setIsEditValue] = useState(false) // Флаг, для изменения поста
    const [value, setValue] = useState(post.title) // Состояние, изменяющее значение нашего поста при нажатии на кнопку

    const id = post.id
    const changePost = () => {
        setIsEditValue(!isEditValue)
        return setPosts(prev => prev.map(post => post.id !== id ? post : {...post, title: value}))
    }
    const deletePost = () => {
        return setPosts(prev => prev.filter(post => post.id !== id))
    }
    return (
        <div>
            <div className={styles.post}>
                <div className={styles.postContent}>
                    {/*<input type={"text"} readOnly={!isEdit} value={value} onChange={(e) => setValue(e.target.value)}/>*/}
                    {/*<button onClick={() => editPost(props.post.id)}></button>*/}
                    <div className={styles.post__input__value}>
                        <div className={styles.post__value}>
                            <strong className={styles.post__strong}>
                                {number}.
                                <input className={styles.post__input}
                                       type={'text'}
                                       readOnly={!isEditValue}
                                       value={String(value)}
                                       onChange={e => setValue(e.target.value)}
                                />
                            </strong>
                            <div>{post.body}</div>
                        </div>
                    </div>
                    <div className={styles.post__buttons}>
                        <img className={styles.post_item__icon}
                             title={'Удалить пост'}
                             onClick={deletePost}
                             src={trash}
                             alt="trash-icon"
                        />
                        <img className={styles.post_item__icon}
                             title={'Изменить пост'}
                             onClick={changePost}
                             src={edit}
                             alt="trash-icon"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToDoItem;