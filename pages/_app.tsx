import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/header/Header";
import Lenis from "@studio-freight/lenis";
import React from "react";
import Cursor from "@/components/cursor/Cursor";

export default function App({ Component, pageProps }: AppProps) {
	React.useEffect(() => {
		const scroll = document.getElementById("scroll");
		const lenis = new Lenis();
		function raf(time: any) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);

		window.addEventListener("scroll", () => {
			let scrollPerc =
				(window.scrollY /
					(document.body.scrollHeight - window.innerHeight)) *
				100;
			scroll!.style.setProperty("--scroll", `${scrollPerc}%`);
		});
	}, []);

	return (
		<>
			<Header />
			<Cursor />
			<div className="scrollBar" id="scroll"></div>
			<div className="noise"></div>
			<Component {...pageProps} />
		</>
	);
}
