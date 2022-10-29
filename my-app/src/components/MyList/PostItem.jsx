import React from 'react';
import styles from "./PostItem.module.css";
const PostItem = (props) => {
  return (
      <div>
        <div className={styles.post}>
          <div className={styles.postContent}>
            <strong>{props.post.id}. {props.post.title}</strong>
            <div>{props.post.body}</div>
          </div>
          {/*<div className={styles.postBtn}>*/}
          {/*  <button>Удалить</button>*/}
          {/*</div>*/}
        </div>
      </div>
  );
};

export default PostItem;