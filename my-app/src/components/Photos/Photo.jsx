import React from 'react';
import styles from "./Photo.module.css";
const Photo = (props) => {
  return (
      <div>
        <div className={styles.post}>
          <div className={styles.post__content}>
            <strong>{props.post.id}. {props.post.title}</strong>
            <img src={props.post.url} alt="logo"/>
          </div>
        </div>
      </div>
  );
};

export default Photo;