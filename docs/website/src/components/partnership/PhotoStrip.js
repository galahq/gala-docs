import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./photoStrip.module.css";

function Photo({ src, alt }) {
  const url = useBaseUrl(src);
  return src ? <img src={url} alt={alt || ""} /> : null;
}

// Row of photos; images are paths under static/, e.g. /img/partnership/1.jpg
export default function PhotoStrip({ images = [] }) {
  return (
    <div className={styles.photoStrip}>
      {images.map((image, idx) => (
        <Photo key={idx} {...image} />
      ))}
    </div>
  );
}
