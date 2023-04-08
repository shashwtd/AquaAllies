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
      borderColor: "#1113",
      opacity: 1,
      scale: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: timeline.current,
        start: "top 80%",
        end: "bottom 80%",
        scrub: true,
      },
    });

    gsap.set(timeline.current, { "--bg": "#8e8e8e", "--s": 0.8 });
    gsap.to(timeline.current, {
      "--bg": "#646464",
      "--s": 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: timeline.current,
        start: "top 75%",
        end: "bottom 75%",
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
        cursor-class="grow"
      >
        <h2>Target {prop.iter} —</h2>
        <p>{prop.desc}</p>
      </div>
    </div>
  );
};

export default TimelineTarget;
