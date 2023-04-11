import React from "react";
import Cursor, { ResetCursor, HideCursor } from "@/components/cursor/Cursor";
import { RemoveCurtain } from "@/components/curtain/Curtain";

const Solutions = () => {
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

      <main id="solsPage">
        <h1>Main</h1>
      </main>
    </>
  );
};

export default Solutions;
