import styles from "./Timeline.module.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { TextPlugin } from "gsap/dist/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const TimelineTarget = (prop: { iter: string; desc: string }) => {
  const timeline = useRef(null);
  const timelineItems = useRef(null);

  useEffect(() => {
    gsap.set(timelineItems.current, { opacity: 0.7, scale: 0.9 });
    gsap.to(timelineItems.current, {
      opacity: 1,
      scale: 1,
      ease: "power4.out",
      duration: 0.5,
      scrollTrigger: {
        trigger: timeline.current,
        start: "top bottom-=200px",
        end: "bottom bottom-=200px",
        scrub: true,
      },
    });

    gsap.set(timeline.current, { "--bg": "#eef0f100", "--s": 0.8 });
    gsap.to(timeline.current, {
      "--bg": "#eef0f1ff",
      "--s": 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: timeline.current,
        start: "top bottom-=200px",
        end: "bottom bottom-=200px",
        scrub: true,
        onEnter: () => {
          gsap.to("#timelineNum span", {
            text: prop.iter.slice(2),
            duration: 0.5,
            ease: "power4.out",
          });
        },
        onEnterBack: () => {
          gsap.to("#timelineNum span", {
            text: prop.iter.slice(2),
            duration: 0.5,
            ease: "power4.out",
          });
        },
      },
    });
  }, [prop.iter]);

  return (
    <div className={styles.timeline__item} ref={timeline}>
      <div
        className={styles.timeline__content}
        ref={timelineItems}
        
      >
        <h2>Target {prop.iter} —</h2>
        <p>{prop.desc}</p>
      </div>
    </div>
  );
};

export default TimelineTarget;
