import React from "react";
import Cursor, { ResetCursor, HideCursor } from "@/components/cursor/Cursor";
import { RemoveCurtain } from "@/components/curtain/Curtain";

const Reports = () => {
  React.useEffect(() => {
    const page = document.getElementById("reportsPage");
    page?.addEventListener("load", () => {
      RemoveCurtain(ResetCursor);
    });
  }, []);
  return (
    <>
      <Cursor />

      <main id="reportsPage">
        <h1>Main</h1>
      </main>
    </>
  );
};

export default Reports;
