import React from "react";
import styles from "./Okfe.module.css";
import Image from "next/image";

function Okfe(prop: {
  thumb: string;
  title: string;
  desc: string;
  link: string;
}) {
  return (
    <div className={styles.okfe}>
      <Image
        src={prop.thumb}
        alt={prop.title}
        width={400}
        height={390}
        priority
        className={styles.okfeImg}
      />
      <div className={styles.okfeInfo}>
        <div className={styles.okfeText}>
          <h3>{prop.title}</h3>
          <p>{prop.desc}</p>
        </div>
        <div className={styles.okfeLink}>
          <a href={prop.link} target="_blank">
            Donate <span>→</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Okfe;
