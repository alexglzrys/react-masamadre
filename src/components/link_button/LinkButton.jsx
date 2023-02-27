import React from "react";
import styles from './LinkButton.module.css';

function LinkButton({ text, url, title }) {
  return (
    <a
      href={url}
      target="_blank"
      id="btn-link"
      title={title}
      rel="noopener noreferrer"
      className={`${styles.LinkButton} wow animate__zoomIn`}
      data-wow-duration="1s"
    >
      { text }
    </a>
  );
}

export default LinkButton;
