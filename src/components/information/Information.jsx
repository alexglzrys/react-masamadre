import React from "react";
import styles from "./Information.module.css";

function Information({ children, position }) {
  return (
    <div
      className={`${styles.Information} wow ${
        position === "right"
          ? `${styles.Information__Right} animate__lightSpeedInRight`
          : `${styles.Information__Left} animate__lightSpeedInLeft`
      }`}
      data-wow-duration="1s"
    >
      {children}
    </div>
  );
}

export default Information;
