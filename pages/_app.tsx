import React from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/header/Header";
import { useRouter } from "next/router";
import Lenis from "@studio-freight/lenis";
import Curtain from "@/components/curtain/Curtain";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  React.useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    const scroll = document.getElementById("scroll");
    window.addEventListener("scroll", () => {
      let scrollPerc =
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
        100;
      scroll!.style.setProperty("--scroll", `${scrollPerc}%`);
    });
  }, []);

  return (
    <React.StrictMode>
      <Curtain />
      <div className="page-wrapper">
        <Header />
        <div className="scrollBar" id="scroll"></div>
        <Component {...pageProps} />
      </div>
    </React.StrictMode>
  );
}

const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100%",
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 30,
      mass: 0.5,
      duration: 0.5,
      delay: 0.2,
    },
  },
  exit: {
    opacity: 0,
    x: "100%",
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 30,
      mass: 0.5,
      duration: 0.5,
    },
  },
};
