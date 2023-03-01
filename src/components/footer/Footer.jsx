import React from "react";
import styles from "./Footer.module.css";

function Footer({ children }) {
  return (
    <footer className={styles.Footer} id="learn_more">
      {children}
    </footer>
  );
}

export default Footer;
