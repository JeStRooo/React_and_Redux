import React from 'react';
import styles from './MyButton.module.css'
const MyButton = ({children, ...props}) => {
  return (
      <div>
        <button {...props} className={styles.myBtn}>
          {children}
        </button>
      </div>
  );
};

export default MyButton;