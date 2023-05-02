import React from "react";
import { gsap } from "gsap";
import fs from "./Feedback.module.css";
import { useState } from "react";
import { uploadRating } from "@/scripts/firebaseConfig";

function AskFeedback(mins: number) {
  let delay = Math.round(mins * 60);
  setTimeout(() => {
    OpenPanel();
  }, delay);
}

function OpenPanel() {
  const panel = document.querySelector(`.${fs.feedback}`) as HTMLElement;
  gsap.set(panel, { display: "flex", y: 100, opacity: 0, scale: 0.5});
  gsap.to(panel, { y: 0, opacity: 1, scale: 1, duration: 0.5 });
}

function ClosePanel() {
  const panel = document.querySelector(`.${fs.feedback}`) as HTMLElement;
  gsap.to(panel, {
    y: 100,
    opacity: 0,
    scale: 0.5,
    duration: 0.5,
    onComplete: () => {
      panel.style.display = "none";
    },
  });
}

function Feedback() {
  const [rating, setRating] = useState(0);
  const [ok, setOk] = useState(false);
  React.useEffect(() => {
    const mainStar = document.querySelector(`.${fs.star}[data-star="1"]`);
    const stars = document.querySelectorAll(`.${fs.star}`);
    const starContainer = document.querySelector(`.${fs.stars}`);
    const rate = document.querySelector(`.${fs.rate}`);
    const fb = document.querySelector(`.${fs.fb}`);
    const proceed = document.querySelector(`.${fs.proceed}`);

    mainStar?.addEventListener("click", () => {
      mainStar.removeEventListener("click", () => {});
      const tl = gsap.timeline();
      gsap.to(mainStar, { opacity: 0, duration: 0.2 });
      tl.to(fb, {
        opacity: 0,
        duration: 0.2,
        onComplete: () => {
          rate?.setAttribute("is-hoverable", "false");
        },
      });
      tl.set(rate, {
        "--width": `239px`,
        "--top": `16px`,
        "--height": "48px",
        "--right": "unset",
        "--left": "16px",
        zIndex: 110,
      });
      tl.set(starContainer, {
        position: "initial",
      });
      tl.set(stars, {
        position: "absolute",
        top: "16px",
        right: "unset",
        left: "0",
        height: "48px",
        width: "48px",
        opacity: 0,
      });
      let left = 200;
      stars.forEach((star) => {
        tl.set(star, {
          visibility: "visible",
          right: "unset",
          left: left,
        });
        left -= 45;
        star.setAttribute("ok-ok", "okie");
      });
      tl.set(proceed, {
        display: "flex",
        opacity: 0,
      });
      tl.to(proceed, {
        opacity: 1,
        duration: 0.2,
      });
      tl.to(stars, {
        opacity: 1,
        duration: 0.14,
        stagger: -0.1,
      });
      tl.to(stars, {
        textShadow: "0 0 10px #ffffff57",
        duration: 0.1,
        onComplete: () => {setOk(true)},
      });
    });
    stars.forEach((star) => {
        if (ok === false) return;
      star.addEventListener("click", () => {
        let starRating = Number(star?.getAttribute("data-star"));
        console.log(starRating);
        if (starRating > 0) {
          setRating(starRating);
          proceed?.setAttribute("active", "true");
          stars.forEach((x) => {
            if (Number(x.getAttribute("data-star")) <= starRating) {
                x.classList.add(fs.oki);
            } else {
                x.classList.remove(fs.oki);
            }
          });
        }
      });
    });
  }, [ok]);

  function submitRating() {
    if (rating === 0) return;
    uploadRating(rating);
    ClosePanel();
  }

  return (
    <div className={fs.feedback}>
      <div className={fs.fb}>
        <h1>Hey there!</h1>
        <p>
          We would love to hear your feedback on this website. Click the star
          button to proceed →
        </p>
      </div>
      <button className={fs.rate} is-hoverable="true">
        <div className={fs.stars}>
          <div className={fs.star} data-star="5" ok-ok="ok">
            ⭐
          </div>
          <div className={fs.star} data-star="4" ok-ok="ok">
            ⭐
          </div>
          <div className={fs.star} data-star="3" ok-ok="ok">
            ⭐
          </div>
          <div className={fs.star} data-star="2" ok-ok="ok">
            ⭐
          </div>
          <div className={fs.star} data-star="1" ok-ok="ok">
            ⭐
          </div>
        </div>
      </button>
      <div className={fs.proceed} onClick={submitRating}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#fff"
          width="800px"
          height="800px"
          viewBox="0 0 24 24"
        >
          <path d="M16.707,18.707a1,1,0,0,1-1.414-1.414L19.586,13H2a1,1,0,0,1,0-2H19.586L15.293,6.707a1,1,0,0,1,1.414-1.414l6,6a1,1,0,0,1,0,1.414Z" />
        </svg>
      </div>
    </div>

  );
}

export default Feedback;
export { AskFeedback, OpenPanel };