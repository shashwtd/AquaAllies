import { gsap } from "gsap";
import React from "react";
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
        const fok = document.querySelector(`.${styles.fok}`);
        if (fok) {
          fok.innerHTML = `<iframe
    src="https://player.vimeo.com/video/817913059?h=ed0c3b745b&title=0&byline=0&portrait=0"
    width="640"
    height="349"
    allow="autoplay; fullscreen; picture-in-picture"
    allowFullScreen
    id="vid"
    ></iframe>`;
        }
      },
    });
  }
}

function Player() {
  return (
    <div className={styles.player}>
      <button id="btn" onClick={hidePlayer}>
        ←
      </button>
      <div className={styles.fok}>
        <iframe
          src="https://player.vimeo.com/video/817913059?h=ed0c3b745b&title=0&byline=0&portrait=0"
          width="640"
          height="349"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          id="vid"
        ></iframe>
      </div>
    </div>
  );
}

export default Player;
export { showPlayer, hidePlayer };
