import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import styles from "./Timeline.module.css";
import { useEffect, useRef } from "react";
import TimelineTarget from "./Target";
import { useRouter } from "next/router";

gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  const router = useRouter();
  useEffect(() => {
    const footer = document.getElementById("daFooter");
    if (footer && router.pathname === "/goals") {
      var num = document.querySelector("#timelineNum");
      if (num) {
        gsap.to(num, {
          opacity: 0,
          duration: 0.4,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: footer,
            start: "top bottom-=50",
            end: "top bottom-=120",
            scrub: true,
          }
        });
      }
    }
  }, [router.pathname]);

  return (
    <div className={styles.timeline}>
      <div className={styles.timeline__container}>
        <div className={styles.timeline__path}></div>
        <div className={styles.timeline__blur}></div>
        <div className={styles.num} id="timelineNum">
          <span>1</span>
        </div>
        <div className={styles.timeline__items}>
          <TimelineTarget
            iter="6.1"
            desc="By 2030, achieve universal and equitable access to safe and affordable drinking water for all"
          />
          <TimelineTarget
            iter="6.2"
            desc="By 2030, achieve access to adequate and equitable sanitation and hygiene for all and end open defecation, paying special attention to the needs of women and girls and those in vulnerable situations"
          />
          <TimelineTarget
            iter="6.3"
            desc="By 2030, improve water quality by reducing pollution, eliminating dumping and minimizing release of hazardous chemicals and materials, halving the proportion of untreated wastewater and substantially increasing recycling and safe reuse globally"
          />
          <TimelineTarget
            iter="6.4"
            desc="By 2030, substantially increase water-use efficiency across all sectors and ensure sustainable withdrawals and supply of freshwater to address water scarcity and substantially reduce the number of people suffering from water scarcity"
          />
          <TimelineTarget
            iter="6.5"
            desc="By 2030, implement integrated water resources management at all levels, including through transboundary cooperation as appropriate"
          />
          <TimelineTarget
            iter="6.6"
            desc="By 2020, protect and restore water-related ecosystems, including mountains, forests, wetlands, rivers, aquifers and lakes"
          />
          <TimelineTarget
            iter="6.A"
            desc="By 2030, expand international cooperation and capacity-building support to developing countries in water- and sanitation-related activities and programmes, including water harvesting, desalination, water efficiency, wastewater treatment, recycling and reuse technologies"
          />
          <TimelineTarget
            iter="6.B"
            desc="Support and strengthen the participation of local communities in improving water and sanitation management"
          />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
