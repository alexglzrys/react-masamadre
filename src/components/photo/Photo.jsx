import React from "react";
import styles from './Photo.module.css';

function Photo({ url, title }) {
  return (
    <img
      src={url}
      className={`${styles.Photo} wow animate__zoomIn`}
      data-wow-duration="2s"
      alt={title}
      title={title}
    />
  );
}

export default Photo;
