import React from "react";
import styles from './Credentials.module.css';

function Credentials({ children }) {
  return (
    <section className={styles.Credentials} id="credentials">
      <header
        className={`${styles.Credentials__Header} wow animate__lightSpeedInRight`}
        data-wow-duration="2s"
      >
        <h3 className={styles.Credentials__Title}>Credenciales</h3>
      </header>
      <h4
        className={`${styles.Credentials__Subtitle} wow animate__lightSpeedInLeft`}
        data-wow-duration="1s"
      >
        Profesionales en Panadería y Nutrición
      </h4>
      {children}
    </section>
  );
}

export default Credentials;
