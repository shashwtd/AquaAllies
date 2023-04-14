/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Cursor, { ResetCursor, HideCursor } from "@/components/cursor/Cursor";
import { RemoveCurtain } from "@/components/curtain/Curtain";
import styles from "@/styles/Contribute.module.css";

const Contribute = () => {
  React.useEffect(() => {
    const handleLoad = () => RemoveCurtain(ResetCursor);
    const images = document.querySelectorAll("img");
    let imagesToLoad = images.length;
    const checkImagesLoaded = () => {
      imagesToLoad--;
      if (imagesToLoad === 0) handleLoad();
    };
    images.forEach((image) => {
      if (image.complete) checkImagesLoaded();
      else image.addEventListener("load", checkImagesLoaded);
    });
    return () => {
      images.forEach((image) =>
        image.removeEventListener("load", checkImagesLoaded)
      );
    };
  }, []);
  return (
    <>
      <Cursor />
      <main id="goalsPage">
        <article className={styles.article}>
          <div className={styles.article__content} contentEditable>
            <h1>Here's how to Contribute!</h1>
            <p>
              We are a community of people who are passionate about the SDGs and
              want to make a difference. We are looking for people who are
              passionate about the SDGs and want to make a difference. We are
              looking for people who are passionate about the SDGs and want to
              make a difference. We are looking for people who are passionate
              about the SDGs and want to make a difference. We are looking for
              people who are passionate about the SDGs and want to make a
              difference. We are.
            </p>
          </div>
        </article>
      </main>
    </>
  );
};

export default Contribute;
