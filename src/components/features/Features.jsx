import React from "react";
import styles from './Features.module.css'

function Features({ children }) {
  return (
    <section className={styles.Features} id="features">
      <header
        className={`${styles.Features__Header} wow animate__bounceInUp`}
        data-wow-duration="2s"
      >
        <h3 className={styles.Features__Title}>¿Qué es?</h3>
      </header>
      {children}
    </section>
  );
}

export default Features;
