import React from "react";
import styles from "./Biography.module.css";

function Biography({ children }) {
  return <article className={styles.Biography}>{children}</article>;
}

export default Biography;
