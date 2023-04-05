import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import styles from "./Timeline.module.css";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  const timeline = useRef(null);
  const timelineItems = useRef(null);

  useEffect(() => {}, []);

  return (
    <div className={styles.timeline}>
      <div className={styles.timeline__container} ref={timeline}>
        <div className={styles.timeline__items} ref={timelineItems}>
          <div className={styles.timeline__item}>
            <div className={styles.timeline__content}>
              <h2>2015</h2>
              <p>
                The United Nations General Assembly adopts the 2030 Agenda for
                Sustainable Development, which includes the 17 Sustainable
                Development Goals (SDGs).
              </p>
            </div>
          </div>
          <div className={styles.timeline__item}>
            <div className={styles.timeline__content}>
              <h2>2016</h2>
              <p>
                The United Nations General Assembly adopts the 2030 Agenda for
                Sustainable Development, which includes the 17 Sustainable
                Development Goals (SDGs).
              </p>
            </div>
          </div>
          <div className={styles.timeline__item}>
            <div className={styles.timeline__content}>
              <h2>2017</h2>
              <p>
                The United Nations General Assembly adopts the 2030 Agenda for
                Sustainable Development, which includes the 17 Sustainable
                Development Goals (SDGs).
              </p>
            </div>
          </div>
          <div className={styles.timeline__item}>
            <div className={styles.timeline__content}>
              <h2>2018</h2>
              <p>
                The United Nations General Assembly adopts the 2030 Agenda for
                Sustainable Development, which includes the 17 Sustainable
                Development Goals (SDGs).
              </p>
            </div>
          </div>
          <div className={styles.timeline__item}>
            <div className={styles.timeline__content}>
              <h2>2019</h2>
              <p>
                The United Nations General Assembly adopts the 2030 Agenda for
                Sustainable Development, which includes the 17 Sustainable
                Development Goals (SDGs).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
