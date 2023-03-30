import styles from "@/styles/Home.module.css";
import topic from "@/styles/Topic.module.css";
import Head from "next/head";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { TextPlugin } from "gsap/dist/TextPlugin";
import { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";
import Content from "@/components/content/Content";
import Header from "@/components/header/Header";
import Cursor, { ResetCursor, HideCursor } from "@/components/cursor/Cursor";
import React from "react";
import Image from "next/image";

function HomePage() {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
  const titleRef = useRef<HTMLDivElement>(null);

  const percH = (h = 0) => {
    return h > 0 ? (h / window.innerHeight) * 100 : window.innerHeight;
  };
  const em = (n = 1) => {
    return 14 * n + "px";
  };

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const title = titleRef.current;
    if (title) {
      gsap.to(title, {
        scale: 0.9,
        x: -100,
        y: -200,
        scrollTrigger: {
          trigger: title,
          start: `top ${percH(title.offsetTop)}%`,
          end: "bottom 20%",
          scrub: true,
        },
      });
      gsap.to(title, {
        scrollTrigger: {
          trigger: title,
          start: `top 40%`,
          end: "bottom 20%",
          scrub: true,
        },
      });
    }
  }, []);

  function setValues(data: any) {
    let title = document.querySelector("#topicTitle") as HTMLElement;
    let desc = document.querySelector("#topicDesc") as HTMLElement;
    let img = document.querySelector("#topicImg") as HTMLElement;

    if (title) {
      title.innerText = data.tag;
      gsap.set("#topicTitle", { x: 50, scale: 0.9, opacity: 0 });
    }
    if (desc) {
      desc.innerHTML = data.long;
      gsap.set("#topicDesc p", { y: 50, opacity: 0 });
    }
    if (img) img.setAttribute("src", data.img);

    return ["#" + title.id, "#" + desc.id, "#" + img.id];
  }

  function topicTransition(inf: any) {
    HideCursor();
    let elms = setValues(inf);
    const topicTimeline = gsap.timeline({});
    const topicOverlay = document.querySelector("." + topic.overlay);
    topicTimeline.set(topicOverlay, { background: inf.color });
    topicTimeline.to(topicOverlay, {
      duration: 0.8,
      y: 0,
    });
    gsap.set("#topicReturn", { x: 50, opacity: 0.1 });
    gsap.set("#topicImg", { scale: 0.9})
    topicTimeline.to("." + topic.content, {
      opacity: 1,
      duration: 0.5,
      onStart: () => {
        gsap.to("#topicReturn", {
          x: 0,
          opacity: 0.8,
          duration: 0.5,
          delay: 0.3,
        });
        gsap.to("#topicImg", {
          scale: 1,
          duration: 0.5,
        });
      },
      onComplete: () => {
        ResetCursor();
        if (elms[0] && elms[1]) {
          topicTimeline.to(elms[0], {
            x: 0,
            scale: 1,
            opacity: 1,
            duration: 0.5,
          });
          topicTimeline.to(elms[1] + " p", {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.15,
          });
        }
      },
    });
  }

  function closeTopic() {
    const topicOverlay = document.querySelector("." + topic.overlay);
    gsap.to("." + topic.content, {
      opacity: 0,
      duration: 0.5,
    });
    gsap.to(topicOverlay, {
      delay: 0.4,
      duration: 0.8,
      y: "100%",
      onComplete: () => {
        gsap.set(topicOverlay, { y: "-100%" });
      },
    });
  }

  return (
    <>
      <Head>
        <title>Project Title</title>
      </Head>

      <Header />
      <Cursor />

      <div className={topic.overlay}>
        <div className={topic.content}>
          <div className={topic.image}>
            <div
              className={topic.goBack}
              cursor-class="overlay"
              id="topicReturn"
              onClick={() => {
                closeTopic();
              }}
            >
              <span>←</span> Return
            </div>
            <div className={topic.imgCont}>
              <Image
                width={500}
                height={220}
                id="topicImg"
                cursor-class="hide"
                src="/images/river.jpg"
                alt="Picture of the author"
                className={topic.img}
              ></Image>
            </div>
          </div>
          <div className={topic.data}>
            <h2 id="topicTitle"></h2>
            <h4 id="topicDesc"></h4>
          </div>
        </div>
      </div>

      <main>
        <div className={styles.page} page-index="1" id="pageLanding">
          <div></div>
          <div className={styles.landing}>
            <div className={styles.title} ref={titleRef}>
              <span cursor-class="grow">Worldwide</span>
              <span cursor-class="grow">Clean Water</span>
            </div>
          </div>
        </div>
        <div className={styles.page} page-index="2" id="pageIntro">
          <Content
            tag="Polluted Rivers."
            image="/images/river.jpg"
            caption="A polluted river which is the source of water for many people."
            text="The water around us keeps getting polluted as the years go by.
              It's now more important than ever to help clean up the water
              around us."
            long="<p> The water around us keeps getting polluted as the years go by.
            It's now more important than ever to help clean up the water
            around us. We can get clean water to drink, bath, and cook with. But there are some parts of world which severely lack of clean water.</p><p>They rely of basic streams of water such as rivers or lakes to fulfil their water needs. Most of the dirty water produced from our homes is dumped into these rivers and lakes. This makes the water dirty and unfit for drinking. This is a major problem in many parts of the world. We can help by cleaning up the water around us.</p>"
            clickback={topicTransition}
            color="#e4ded6"
          />
          <Content
            tag="Lack of Clean Water."
            image="/images/beach3.jpg"
            caption="Lots of water available — but still nothing to drink!"
            text="
                While most of us have clean supply of water, There are some who
                don't have any source of clean water and even find a glass of
                water to be a blessing."
            long=""
            clickback={topicTransition}
            color="#e4ded6"
          ></Content>
        </div>
      </main>
    </>
  );
}

export default HomePage;
