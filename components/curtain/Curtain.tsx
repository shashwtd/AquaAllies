import styles from "./Curtain.module.css";
import React from "react";
import { gsap } from "gsap";

var direction_ = "right"

function ThrowCurtain(CurtainThrown: any, direction: string) {
  direction_ = direction;
  const curtain = document.querySelector("." + styles.curtain) as HTMLElement;
  if (curtain) {
    gsap.set(curtain, {scaleX: 0.3, visibility: "initial"});
    if (direction === "right") {
      gsap.set(curtain, { x: "-100vw", transformOrigin: "right" });
    } else if (direction === "left") {
      gsap.set(curtain, { x: "100vw", transformOrigin: "left" });
    }
  }
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

function RemoveCurtain() {
  const curtain = document.querySelector("." + styles.curtain) as HTMLElement;
  const waiter = document.querySelector("." + styles.waiter);
  if (waiter) gsap.set(waiter, { delay: 0.4, opacity: 0 });
  var x = "translateX(100vw)";
  if (direction_ === "right") x = "translateX(100vw)"
  if (direction_ === "left") x = "translateX(-100vw)"
  gsap.to(curtain, {
    delay: 0.8,
    duration: 0.8,
    ease: "power2.in",
    transform: x,
    scaleX: 0.2,
    onComplete: () => {
      if (curtain) {
        gsap.set(curtain, {visibility: "hidden"})
        if (direction_ === "right") {
          gsap.set(curtain, { x: "-100vw", scaleX: 1 });
        } else if (direction_ === "left") {
          gsap.set(curtain, { x: "100vw", scaleX: 1 });
        }
      }
    },
  });
}

function Curtain() {
  return (
    <div className={styles.curtain} onClick={RemoveCurtain}>
      <div className={styles.waiter}>
        <div className={styles.waiting}></div>
        <h2>loading..</h2>
      </div>
    </div>
  );
}

export default Curtain;
export { ThrowCurtain, RemoveCurtain };
