import styles from "@/styles/Home.module.css";
import topic from "@/styles/Topic.module.css";
import Head from "next/head";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { TextPlugin } from "gsap/dist/TextPlugin";
import { useEffect, useRef } from "react";
import Content from "@/components/content/Content";
import Cursor, { ResetCursor, HideCursor } from "@/components/cursor/Cursor";
import React from "react";
import Image from "next/image";
import ReactDOM from "react-dom";
import { RemoveCurtain } from "@/components/curtain/Curtain";

function HomePage() {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
  const titleRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const percH = (h = 0) => {
    return h > 0 ? (h / window.innerHeight) * 100 : window.innerHeight;
  };
  const em = (n = 1) => {
    return 14 * n + "px";
  };

  useEffect(() => {
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

      const videoPreview = document.querySelector("#videoPreview");
      gsap.set(videoPreview, {
        scaleX: 0.5,
        transformOrigin: "center",
      });
      gsap.to(videoPreview, {
        scrollTrigger: {
          trigger: videoPreview,
          start: `top bottom`,
          end: "top 21px",
          scrub: true,
        },
        scaleX: 1,
      });
      gsap.to(videoPreview, {
        scrollTrigger: {
          trigger: videoPreview,
          start: `top 21px`,
          end: "top -500px",
          scrub: true,
        },
        y: 200,
        onComplete: () => {
          console.log("OKAY");
        },
      });
    }

    const handleLoad = () => RemoveCurtain(ResetCursor);
    const images = document.querySelectorAll("img");
    const bgVid = document.querySelector(".fsBgVid") as HTMLVideoElement;
    let imagesToLoad = images.length + 1;
    const reduceImagesToLoad = () => {
      imagesToLoad--;
      if (imagesToLoad === 0) handleLoad();
    };

    if (bgVid.readyState === 4) handleLoad();
    else bgVid.addEventListener("loadeddata", reduceImagesToLoad);

    images.forEach((image) => {
      if (image.complete) reduceImagesToLoad();
      else image.addEventListener("load", reduceImagesToLoad);
    });
    return () => {
      images.forEach((image) =>
        image.removeEventListener("load", reduceImagesToLoad)
      );
    };
  });

  function setValues(data: any) {
    let title = document.querySelector("#topicTitle") as HTMLElement;
    let desc = document.querySelector("#topicDesc") as HTMLElement;
    let img = document.querySelector("#topicImageContainer") as HTMLElement;

    if (title) {
      title.innerText = data.tag;
      gsap.set("#topicTitle", { x: 50, scale: 0.9, opacity: 0 });
    }
    if (desc) {
      desc.innerHTML = data.long;
      gsap.set("#topicDesc p", { y: 50, opacity: 0 });
    }
    if (img) {
      ReactDOM.render(
        generateImg(data.image, data.caption),
        imageContainerRef.current
      );
    }

    proceed(["#" + title.id, "#" + desc.id, "#" + img.id]);
  }

  function proceed(elms: any) {
    const topicTimeline = gsap.timeline({});
    const topicOverlay = document.querySelector("." + topic.overlay);
    topicTimeline.to(topicOverlay, {
      duration: 0.8,
      y: 0,
    });
    gsap.set("#topicReturn", { x: 50, opacity: 0.1 });
    gsap.set("#topicImg", { scale: 0.9 });
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

  function topicTransition(inf: any) {
    HideCursor();
    setValues(inf);
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
      y: "-100%",
      onComplete: () => {
        gsap.set(topicOverlay, { y: "100%" });
      },
    });
  }

  function generateImg(src: string, alt: string) {
    return (
      <Image
        width={500}
        height={220}
        id="topicImg"
        cursor-class="hide"
        src={src}
        alt={alt}
        className={topic.img}
        priority
      ></Image>
    );
  }

  return (
    <>
      <Head>
        <title>Project Title</title>
      </Head>

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
            <div
              className={topic.imgCont}
              id="topicImageContainer"
              ref={imageContainerRef}
              cursor-class="hide"
            >
              {generateImg(
                "/images/river.jpg",
                "A polluted river which is the source of water for many people."
              )}
            </div>
          </div>
          <div className={topic.data}>
            <h2 id="topicTitle"></h2>
            <h4 id="topicDesc"></h4>
          </div>
        </div>
      </div>

      <main id="mainPage">
        <div className={styles.page} page-index="1" id="pageLanding">
          <div></div>
          <div className={styles.landing}>
            <div className={styles.title} ref={titleRef}>
              <span cursor-class="grow">Worldwide</span>
              <span cursor-class="grow">Clean Water</span>
            </div>
          </div>
        </div>

        <div className={styles.page} page-index="2" id="pageReel">
          <div id="videoPreview" className={styles.vid} cursor-class="hide">
            <div className={styles.vidTitle}>Watch Showreel</div>
          </div>
        </div>

        <div className={styles.page} page-index="3" id="pageIntro">
          <Content
            tag="Water Pollution"
            image="/images/beach0.jpg"
            caption="A beach covered with trash and plastics."
            text="The water around us keeps getting polluted as the years go by. It's now more important than ever to help clean up the water around us."
            long="<p>Water pollution is a major environmental issue that affects not only aquatic life, but also human health. Polluted water can contain harmful chemicals, bacteria, and other contaminants that can lead to serious illnesses and diseases.</p><p>Many sources of water pollution are caused by human activities, such as industrial waste, agricultural runoff, and improper disposal of household chemicals. Climate change also plays a role in water pollution, as rising temperatures can lead to increased algal blooms and decreased oxygen levels in water bodies.</p><p>We can all do our part to help prevent water pollution by properly disposing of waste, conserving water, and supporting organizations that work to protect and restore our waterways.</p>"
            clickback={topicTransition}
          />

          <Content
            tag="Lack of Clean Water."
            image="/images/collecting_water.jpeg"
            caption="People collecting water from a polluted river."
            text="While most of us have clean supply of water, there are some who don't have any source of clean water and even find a glass of water to be a blessing."
            long="<p>Access to clean water is a basic human right, yet millions of people around the world do not have access to it. While we may take water for granted, there are others who struggle to find even a drop of clean water to drink.</p><p>Many people in developing countries rely on water sources that are contaminated with bacteria, viruses, and parasites. Drinking this water can lead to serious illnesses, and even death. Lack of access to clean water also prevents people from practicing basic hygiene, which can lead to the spread of diseases and illnesses.</p><p>We can help by supporting organizations that provide access to clean water and sanitation, and by taking steps to conserve water in our daily lives. Together, we can help ensure that everyone has access to this essential resource.</p>"
            clickback={topicTransition}
          />

          <Content
            tag="Water Scarcity"
            image="/images/water-scarcity.jpg"
            caption="A long line of people waiting for water."
            text="Water scarcity is becoming an increasingly serious issue in many parts of the world, leading to conflicts, displacement, and even geopolitical tensions."
            long="<p>Water scarcity occurs when demand for water exceeds the available supply, and is becoming an increasingly urgent issue in many parts of the world. Climate change, population growth, and unsustainable water use practices are all contributing to this problem.</p><p>Water scarcity can have severe consequences, such as crop failures, famine, conflicts over water resources, and displacement of populations. It is important that we work together to address this issue by implementing sustainable water use practices, investing in water infrastructure, and supporting communities affected by water scarcity.</p>"
            clickback={topicTransition}
          />

          <Content
            tag="Water Conservation"
            image="/images/rainwater-harvesting.jpeg"
            caption="A house with rainwater harvesting system to save water."
            text="Water is a precious resource that we should all strive to conserve. Even small changes in our daily habits can make a big difference."
            long="<p>Water conservation is an important issue for everyone, regardless of where we live. While some areas may have abundant water resources, others may struggle with water scarcity. Additionally, climate change and population growth are putting increasing pressure on our water supplies.</p><p>There are many ways we can conserve water in our daily lives, such as fixing leaky faucets, taking shorter showers, and using drought-resistant plants in our gardens. It's also important for businesses and industries to adopt sustainable water use practices, such as using recycled water for irrigation or implementing water-efficient technologies.</p><p>By working together to conserve water, we can help ensure that we have enough clean water for everyone, now and in the future.</p>"
            clickback={topicTransition}
          />

          <Content
            tag="Wastewater Treatment"
            image="/images/wastewater-treatment.jpg"
            caption="A wastewater treatment plant."
            text="Wastewater treatment is vital for protecting our environment and public health by removing harmful pollutants from water."
            long="<p>Wastewater treatment is the process of removing contaminants from wastewater before it is released back into the environment. This can include removing solids, organic matter, and harmful chemicals or pathogens. Wastewater treatment is important because untreated wastewater can harm aquatic life, contaminate drinking water sources, and spread disease.</p><p>There are many different types of wastewater treatment systems, ranging from small septic systems for individual homes to large-scale treatment plants for entire cities. Advances in technology have made it possible to treat wastewater more efficiently and effectively, which is good news for both the environment and our wallets. By supporting investments in wastewater treatment infrastructure and technologies, we can help protect our environment and ensure that our water resources remain clean and safe.</p>"
            clickback={topicTransition}
          />
        </div>
      </main>
    </>
  );
}

export default HomePage;
