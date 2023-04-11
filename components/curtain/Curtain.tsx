import styles from "./Curtain.module.css";
import React from "react";
import { gsap } from "gsap";

function ThrowCurtain(CurtainThrown: any) {
  const curtain = document.querySelector("." + styles.curtain) as HTMLElement;
  if (curtain) gsap.set(curtain, { x: "-100vw" , scaleX: 0.3, transformOrigin: "right"});
  gsap.to(curtain, {
    duration: 0.6,
    transform: "translateX(0)",
    scale: 1,
    ease: "power2.in",
    onComplete: () => {
      const waiter = document.querySelector("." + styles.waiter);
      gsap.set(waiter, { opacity: 0.7 });
      CurtainThrown();
    },
  });
}

function RemoveCurtain(CurtainRemoved: any) {
  const curtain = document.querySelector("." + styles.curtain) as HTMLElement;
  gsap.to(curtain, {
    delay: 0.8,
    duration: 0.8,
    ease: "power2.in",
    transform: "translateX(100vw)",
    scaleX: 0.2,
    onStart: () => {
      const waiter = document.querySelector("." + styles.waiter);
      if (waiter) gsap.set(waiter, { opacity: 0 });
    },
    onComplete: () => {
      if (curtain) gsap.set(curtain, {x: "-100vw", scaleX: 1});
      if (CurtainRemoved) CurtainRemoved();
    },
  });
}

function Curtain() {
  return (
    <div className={styles.curtain} cursor-class="hide" onClick={RemoveCurtain}>
      <div className={styles.waiter}>
        <div className={styles.waiting}></div>
        <h2>loading..</h2>
      </div>
    </div>
  );
}

export default Curtain;
export { ThrowCurtain, RemoveCurtain };
