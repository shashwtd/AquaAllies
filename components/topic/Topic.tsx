import React from "react";
import Image from "next/image";
import styles from "./More.module.css";
import { useRouter } from "next/router";

function More(prop: { img: string; title: string; description: string; tag: string }) {
  const router = useRouter();
  React.useEffect(() => {});

  return (
    <div className={styles.topicPage}>
      <div className={styles.topicImg}>
        <Image src={prop.img} width={600} height={100} alt={prop.tag}></Image>
      </div>
    </div>
  );
}

export default More;
