import React from "react";
import styles from "./Biography.module.css";

function Biography({ children, direction }) {
  return (
    <article
      className={`${styles.Biography} ${
        direction === "reverse" ? styles.Biography__Reverse : null
      }`}
    >
      {children}
    </article>
  );
}

export default Biography;
