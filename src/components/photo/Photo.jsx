import React from "react";
import styles from './Photo.module.css';

function Photo({ url, title, rotate }) {
  return (
    <img
      src={url}
      className={`${styles.Photo} wow animate__zoomIn`}
      data-wow-duration="2s"
      style={{transform: `rotate(${rotate})`}}
      alt={title}
      title={title}
    />
  );
}

export default Photo;
