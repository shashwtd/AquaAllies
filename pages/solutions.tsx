import React from "react";
import Cursor, { ResetCursor, HideCursor } from "@/components/cursor/Cursor";
import { RemoveCurtain } from "@/components/curtain/Curtain";

const Solutions = () => {
  React.useEffect(() => {
    RemoveCurtain(ResetCursor);
  }, []);
  return (
    <>
      <Cursor />

      <main>
        <h1>Main</h1>
      </main>
    </>
  );
};

export default Solutions;
