import React, { useState } from "react";
import styles from "./Cursor.module.css";

function ResetCursor() {
  const cursor = document.querySelector("#cursor") as HTMLElement;
  cursor.setAttribute("state", "");
  cursor.removeAttribute("invisible");
}

function HideCursor() {
  const cursor = document.querySelector("#cursor") as HTMLElement;
  cursor.setAttribute("invisible", "");
}

const Cursor = () => {
  React.useEffect(() => {
    const cursor = document.querySelector("#cursor") as HTMLElement;
    const cursorCircle = document.querySelector("#cursorCircle") as HTMLElement;
    var wobble = true;

    const mouse = { x: -100, y: -100 };
    const pos = { x: 0, y: 0 };
    const speed = 0.08;

    const updateCoordinates = (e: { clientX: number; clientY: number }) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    HideCursor();
    setTimeout(() => {
      ResetCursor();
    }, 500);

    window.addEventListener("mousemove", updateCoordinates);
    window.addEventListener("mouseout", () => {
      cursor.setAttribute("state", "hide");
    });
    window.addEventListener("mouseover", () => {
      cursor.setAttribute("state", "");
    });

    function getAngle(diffX: number, diffY: number) {
      return (Math.atan2(diffY, diffX) * 180) / Math.PI;
    }

    function getSqueeze(diffX: number, diffY: number) {
      const distance = Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
      const maxSqueeze = 0.15;
      const accelerator = 1500;
      return Math.min(distance / accelerator, maxSqueeze);
    }

    const updateCursor = () => {
      const diffX = Math.round(mouse.x - pos.x);
      const diffY = Math.round(mouse.y - pos.y);

      pos.x += diffX * speed;
      pos.y += diffY * speed;

      const angle = getAngle(diffX, diffY);
      const squeeze = getSqueeze(diffX, diffY);

      const scale = "scale(" + (1 + squeeze) + ", " + (1 - squeeze) + ")";
      const rotate = "rotate(" + angle + "deg)";
      const translate = "translate3d(" + pos.x + "px ," + pos.y + "px, 0)";

      cursor.style.transform = translate;
      if (wobble) cursorCircle.style.transform = scale + " " + rotate;
    };

    function loop() {
      updateCursor();
      requestAnimationFrame(loop);
    }

    requestAnimationFrame(loop);

    const cursorModifiers = document.querySelectorAll("[cursor-class]");
    cursorModifiers.forEach((cursorModifier) => {
      cursorModifier.addEventListener("mouseenter", function (this: any) {
        const cursorClass = this.getAttribute("cursor-class");
        cursor.setAttribute("state", cursorClass);
        cursorClass == "arrow" ? (wobble = false) : (wobble = true);
        if (cursorClass == "arrow") {
          cursorCircle.style.transform = "rotate(0deg)";
        }
      });

      cursorModifier.addEventListener("mouseleave", function () {
        cursor.setAttribute("state", "");
        wobble = true;
      });
    });
  }, []);

  return (
    <div className={styles.cursor} id="cursor">
      <div className={styles.cursorCircle} id="cursorCircle"></div>
    </div>
  );
};

export default Cursor;
export { ResetCursor, HideCursor };
