import { gsap } from "gsap";
import React from "react";
import Vimeo from "@u-wave/react-vimeo";
import styles from "./Player.module.css";

function showPlayer() {
  const player = document.querySelector(`.${styles.player}`);
  if (player) {
    gsap.set(player, { opacity: 0, display: "block", scale: 0.8 });
    gsap.to(player, { opacity: 1, duration: 0.5, scale: 1 });
  }
}

function hidePlayer() {
  const player = document.querySelector(`.${styles.player}`);
  if (player) {
    gsap.set(player, { opacity: 1, display: "block", scale: 1 });
    gsap.to(player, {
      opacity: 0,
      duration: 0.5,
      scale: 0.8,
      onComplete: () => {
        gsap.set(player, { display: "none", scale: 1 });
      },
    });
  }
}

function Player() {
  return (
    <div className={styles.player}>
      <div className={styles.btn} onClick={hidePlayer}>
        ←
      </div>
      <iframe
        src="https://player.vimeo.com/video/817913059?h=ed0c3b745b&title=0&byline=0&portrait=0"
        width="640"
        height="349"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        className={styles.vid}
      ></iframe>
    </div>
  );
}

export default Player;
export { showPlayer, hidePlayer };
