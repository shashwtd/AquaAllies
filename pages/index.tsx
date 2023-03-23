import styles from "@/styles/Home.module.css";
import Head from "next/head";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Lenis from "@studio-freight/lenis";

function HomePage() {
  gsap.registerPlugin(ScrollTrigger);
  const titleRef = useRef<HTMLDivElement>(null);

  function easeOutCirc(x: number): number {
    return Math.sqrt(1 - Math.pow(x - 1, 2));
  }

  const percW = (w = 0) => {
    return w > 0 ? (w / window.innerWidth) * 100 : window.innerWidth;
  };
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

    const lhr = document.querySelectorAll(`.${styles.intro}`);
    lhr.forEach((el) => {
      gsap.set(el, { lineHeight: 2.3, transformOrigin: "top" });
      gsap.to(el, {
        lineHeight: 1.3,
        duration: 1.4,
        scrollTrigger: {
          trigger: el,
          start: "top 100%",
          end: "top 50%",
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <>
      <Head>
        <title>Project Title</title>
      </Head>

      <main>
        <div className={styles.page} page-index="1" id="page">
          <div></div>
          <div className={styles.landing}>
            <div className={styles.title} ref={titleRef}>
              <span cursor-class="grow">Worldwide</span>
              <span cursor-class="grow">Clean Water</span>
            </div>
          </div>
        </div>
        <div className={styles.page} page-index="2" id="page">
          <div className={styles.content}>
            <div className={styles.intro} cursor-class="grow">
              The water around us keeps getting polluted as the years go by.
              It&apos;s now more important than ever to help clean up the water
              around us.
            </div>
            <div className={styles.introImgCont}>
              <Image
                src="/images/beach0.jpg"
                alt="Kid at a beach"
                width={800}
                height={490}
                priority
                cursor-class="subtle"
                className={styles.introImg}
              />
              <p cursor-class="overlay"> Dirty beach filled with plastic left by tourists</p>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.intro} cursor-class="grow">
              While most of us have clean supply of water, There are some who
              don&apos;t have any source of clean water and even find a glass of
              water to be a blessing.
            </div>
            <div className={styles.introImgCont}>
              <Image
                src="/images/beach1.jpg"
                alt="Kid at a beach"
                width={800}
                height={490}
                priority
                cursor-class="subtle"
                className={styles.introImg}
              />
              <p cursor-class="overlay"> There is lots of water — but still nothing to drink!</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default HomePage;
