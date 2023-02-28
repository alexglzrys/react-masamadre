import React from "react";
import styles from './Main.module.css'

function Main({ children }) {
  return (
    <main
      className={`${styles.Main} wow animate__fadeIn`}
      id="container"
      data-wow-duration="2s"
    >
      {children}
    </main>
  );
}

export default Main;
