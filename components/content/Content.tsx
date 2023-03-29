import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { TextPlugin } from "gsap/dist/TextPlugin";
import React from "react";
import Image from "next/image";
import styles from "./Content.module.css";
import { useState } from "react";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

export default function Content(prop: {
  tag: string;
  text: string;
  image: string;
  caption: string;
  long: string;
  color: string;
  clickback: (data: {}, callback: () => void) => void;
}) {
  React.useEffect(() => {
    const lhr = document.querySelectorAll(`.${styles.intro}`);
    lhr.forEach((el, index) => {
      if (index % 2 == 0) {
        gsap.set(el, { x: 100 });
      } else {
        gsap.set(el, { x: -100 });
      }
      gsap.set(el, { opacity: 0.3 });
      gsap.to(el, {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: el,
          start: "top 100%",
          end: "bottom 80%",
          scrub: true,
        },
      });
    });

    const contents = document.querySelectorAll(`.${styles.content}`);
    contents.forEach((el) => {
      gsap.to(el, {
        y: -100,
        scrollTrigger: {
          trigger: el,
          start: "top 10%",
          end: "top -50%",
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


  const [isTopiccing, setTopiccing] = useState(false);
  function handleLinkClick(e: any) {
    if (isTopiccing) return;
    setTopiccing(true);
    prop.clickback(
      {
        tag: prop.tag,
        text: prop.text,
        image: prop.image,
        caption: prop.caption,
        long: prop.long,
        color: prop.color,
      },
      () => {
        setTopiccing(false);
      }
    );
  }

  return (
    <div className={styles.content}>
      <div className={styles.intro} cursor-class="grow">
        {prop.text}
      </div>
      <div className={styles.introImgCont}>
        <div>
          <div className={styles.introImgBox}></div>
          <div
            className={styles.introImgOverlay}
            cursor-class="arrow"
            id="topicLink"
            onClick={() => {handleLinkClick(event)}}
          ></div>
          <div className={styles.introImgX}>
            <Image
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
    </div>
  );
}
