import React from "react";
import styles from "./Slides.module.css";

function Slides({ children }) {
  return (
    <div
      className={`${styles.Slides} wow animate__flipInX`}
      data-wow-duration="2s"
    >
      {children}
    </div>
  );
}

export default Slides;
