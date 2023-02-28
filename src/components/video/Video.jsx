import React from "react";
import styles from "./Video.module.css";

function Video({ url, title, slide = false }) {
  return (
    <iframe
      class={`${slide ? styles.Slide : `${styles.Video} wow animate__fadeIn`}`}
      data-wow-duration="6s"
      src={url}
      title={title}
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  );
}

export default Video;
