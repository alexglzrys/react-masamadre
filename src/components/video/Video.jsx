import React from "react";
import styles from "./Video.module.css";

function Video({ url, title, slide = false }) {
  return (
    <iframe
      className={`${slide ? styles.Slide : `${styles.Video} wow animate__fadeIn`}`}
      data-wow-duration="6s"
      src={url}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
}

export default Video;
