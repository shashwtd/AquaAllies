import React from "react";
import Cursor, { ResetCursor, HideCursor } from "@/components/cursor/Cursor";
import { RemoveCurtain } from "@/components/curtain/Curtain";

const Solutions = () => {
  React.useEffect(() => {
    const page = document.getElementById("solsPage");
    page?.addEventListener("load", () => {
      RemoveCurtain(ResetCursor);
    });
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
