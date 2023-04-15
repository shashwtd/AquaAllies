import React from "react";
import Cursor, { ResetCursor, HideCursor } from "@/components/cursor/Cursor";
import { RemoveCurtain } from "@/components/curtain/Curtain";

const Reports = () => {
  React.useEffect(() => {
    const handleLoad = () => RemoveCurtain(ResetCursor);
    const images = document.querySelectorAll("img");
    const bgVid = document.querySelector(".fsBgVid") as HTMLVideoElement;
    let imagesToLoad = images.length + 1;
    const reduceImagesToLoad = () => {
      imagesToLoad--;
      if (imagesToLoad === 0) handleLoad();
    };

    if (bgVid.readyState === 4) handleLoad();
    else bgVid.addEventListener("loadeddata", reduceImagesToLoad);

    images.forEach((image) => {
      if (image.complete) reduceImagesToLoad();
      else image.addEventListener("load", reduceImagesToLoad);
    });
    return () => {
      images.forEach((image) =>
        image.removeEventListener("load", reduceImagesToLoad)
      );
    };
  }, []);
  return (
    <>
      <Cursor />

      <main id="reportsPage">
        
      </main>
    </>
  );
};

export default Reports;
