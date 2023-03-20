import styles from "@/styles/Home.module.css";
import Head from "next/head";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Lenis from "@studio-freight/lenis";

function HomePage() {
	gsap.registerPlugin(ScrollTrigger);
	const titleRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const lenis = new Lenis();
		function raf(time: any) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);

		const title = titleRef.current;
		if (title) {
			let tl = gsap.timeline({
				scrollTrigger: {
					trigger: title,
					start: "top 30%",
					end: "bottom 30%",
					scrub: true,
				},
			});
			tl.to(title, { opacity: 0 });
		}

		const pages = document.querySelectorAll("#pageTrigger");
		pages.forEach((page, index) => {
			ScrollTrigger.create({
				trigger: page,
				start: "top 70%",
				onEnter: () => {},
			});
		});

		const beachImg = document.getElementById("beachImg");
		beachImg?.addEventListener("mouseenter", () => {
			gsap.to(beachImg, {
				zoom: 1.1,
			})
		});
	}, []);

	return (
		<>
			<Head>
				<title>Project Title</title>
			</Head>

			<main>
				<div className={styles.page} page-index="1">
					<div id="pageTrigger"></div>
					<div className={styles.landing}>
						<div className={styles.title} ref={titleRef}>
							<span cursor-class="grow">Worldwide</span>
							<span cursor-class="grow">Clean Water</span>
						</div>
					</div>
				</div>
				<div className={styles.page} page-index="2">
					<div id="pageTrigger"></div>
					<div className={styles.content}>
						<div className={styles.card}>
							<img
								className={styles.pageImg}
								src="/images/beach1.jpg"
								alt="turtle swimming in ocean"
								id="beachImg"
								// fill
								// priority
								cursor-class="hide"
							/>
						</div>
						<div className={styles.card}>
							<div className={styles.inner}>
								<h2 className={styles.pageTitle}>
									What&apos;s this all about?
								</h2>
								<p className={styles.pageDesc}>
									The global water pollution crisis is a major
									threat for acheiving sustainable
									development. It not only affects the
									upcoming generation but has a drastic impact
									on us and other beings in the environment.
									<br />
								</p>
							</div>
							{/* <div className={styles.inner}>
								<h2 className="pageLink">
									<Link href="/showreel">Watch Showreel</Link>
								</h2>
							</div> */}
						</div>
					</div>
				</div>
			</main>
		</>
	);
}

export default HomePage;
