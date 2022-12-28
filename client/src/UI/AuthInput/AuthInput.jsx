import React from 'react';
import styles from './AuthInput.module.css';

const AuthInput = React.forwardRef((props, ref) => (
  <input ref={ref} {...props} className={styles.auth_input} />
));

export default AuthInput;
