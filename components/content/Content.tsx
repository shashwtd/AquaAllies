import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { TextPlugin } from "gsap/dist/TextPlugin";
import React from "react";
import Image from "next/image";
import styles from "./Content.module.css";

gsap.registerPlugin(ScrollTrigger, TextPlugin);


export default function Content(prop: {
  text: string;
  image: string;
  caption: string;
}) {
  React.useEffect(() => {
    const lhr = document.querySelectorAll(`.${styles.intro}`);
    lhr.forEach((el) => {
      gsap.set(el, { opacity: 0.3 });
      gsap.to(el, {
        opacity: 1,
        scrollTrigger: {
          trigger: el,
          start: "top 100%",
          end: "bottom 80%",
          scrub: true,
        },
      });
    });

    const imgELms = document.querySelectorAll(`.${styles.introImgCont}`);
    imgELms.forEach((el) => {
      gsap.set(el, { opacity: 0.3 });
      gsap.to(el, {
        y: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: el,
          start: "top 130%",
          end: "top 80%",
          scrub: true,
        },
      });

      
      el.addEventListener("mouseenter", () => {
        const text = el.querySelector("p");
        if (text) {
          gsap.to(text, {
            delay: 0.1,
            duration: 0.4,
            text: "Click to learn more about this",
          });
        }
      });
      el.addEventListener("mouseleave", () => {
        const text = el.querySelector("p");
        if (text) {
          let img = el.querySelector("img") as HTMLImageElement;
          gsap.to(text, {
            delay: 0.1,
            duration: 0.4,
            text: img.alt,
          });
        }
      });
    });
  });
  return (
    <div className={styles.content}>
      <div className={styles.intro} cursor-class="grow">
        {prop.text}
      </div>
      <div className={styles.introImgCont}>
        <div className={styles.introImgBox}></div>
        <div className={styles.introImgX}>
          <Image
            cursor-class="arrow"
            src={prop.image}
            alt={prop.caption}
            width={800}
            height={490}
            priority
            className={styles.introImg}
          />
        </div>
        <p>{prop.caption}</p>
      </div>
    </div>
  );
}
