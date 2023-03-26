import React from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/header/Header";
import Cursor from "@/components/cursor/Cursor";
import { motion, AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    const scroll = document.getElementById("scroll");
    window.addEventListener("scroll", () => {
      let scrollPerc =
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
        100;
      scroll!.style.setProperty("--scroll", `${scrollPerc}%`);
    });
  }, []);

  return (
    <AnimatePresence>
      <Header />
      <Cursor />
      <div className="scrollBar" id="scroll"></div>
      <Component {...pageProps} />
    </AnimatePresence>
  );
}
