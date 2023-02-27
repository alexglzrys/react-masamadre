import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={`${styles.Header} wow animate__fadeIn`} data-wow-duration="2s">
      <h1 className={styles.Header__Title}>Masa Madre</h1>
      <img
        src="assets/images/home-masamadre.png"
        className={styles.Header__Logotipo}
        alt="Logotipo masa madre"
        title="Masa Madre"
      />
    </header>
  );
}

export default Header;
