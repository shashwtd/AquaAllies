import styles from "@/styles/Home.module.css";
import Head from "next/head";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

function HomePage() {
	gsap.registerPlugin(ScrollTrigger);
	const titleRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const title = titleRef.current;
		if (title) {
			let tl = gsap.timeline({
				scrollTrigger: {
					trigger: title,
					start: "top 40%",
					end: "bottom 30%",
					scrub: true,
				},
			});
			tl.to(title, {opacity: 0});
		}
	}, []);

	return (
		<>
			<Head>
				<title>Project Title</title>
			</Head>

			<main>
				<div className={styles.page}>
					<div className={styles.landing}>
						<div className={styles.title} ref={titleRef}>
							<span cursor-class="grow">Worldwide</span>
							<span cursor-class="grow">Clean Oceans</span>
						</div>
					</div>
				</div>
				<div className={styles.page}>
					<h2 className="pageTitle">
						
					</h2>
				</div>
			</main>
		</>
	);
}

export default HomePage;
