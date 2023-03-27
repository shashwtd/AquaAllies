import styles from "@/styles/Home.module.css";
import Head from "next/head";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { TextPlugin } from "gsap/dist/TextPlugin";
import { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";
import Content from "@/components/content/Content";
import Link from "next/link";

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

  return (
    <>
      <Head>
        <title>Project Title</title>
      </Head>

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
            tag="/polluted-rivers"
            image="/images/river.jpg"
            caption="A polluted river which is the source of water for many people."
            text="The water around us keeps getting polluted as the years go by.
              It's now more important than ever to help clean up the water
              around us."
          />
          <Content
            tag="/dirty-waters"
            image="/images/beach3.jpg"
            caption="Lots of water available — but still nothing to drink!"
            text="
                While most of us have clean supply of water, There are some who
                don't have any source of clean water and even find a glass of
                water to be a blessing."
          ></Content>
        </div>
      </main>
    </>
  );
}

export default HomePage;
