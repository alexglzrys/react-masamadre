import React from "react";
import styles from './Name.module.css';

function Name({ name }) {
  return <h4 className={styles.Name}>{name}</h4>;
}

export default Name;
