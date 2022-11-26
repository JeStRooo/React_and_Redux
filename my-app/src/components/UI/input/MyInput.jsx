import React from 'react';
import styles from './MyInput.module.css'
const MyInput = (props) => {

  return (
      <div>
        <input className={styles.myInput} {...props} />
      </div>
  );
};
export default MyInput;