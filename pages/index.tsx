import styles from "@/styles/Home.module.css";
import Head from "next/head";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Lenis from "@studio-freight/lenis";

function HomePage() {
	gsap.registerPlugin(ScrollTrigger);
	const titleRef = useRef<HTMLDivElement>(null);
	const slideShowRef = useRef<HTMLDivElement>(null);

	function easeOutCirc(x: number): number {
		return Math.sqrt(1 - Math.pow(x - 1, 2));
	}

	const percW = (w=0) => {return w > 0 ? (w / window.innerWidth) * 100 : window.innerWidth}
	const percH = (h=0) => {return h > 0 ? (h / window.innerHeight) * 100 : window.innerHeight}

	useEffect(() => {
		const lenis = new Lenis({
			duration: 1.4,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
		});
		function raf(time: any) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);

		const title = titleRef.current;
		if (title) {
			gsap.to(title, {
				scale: 0.9,
				x: "-200px",
				scrollTrigger: {
					trigger: title,
					start: `top ${percH(title.offsetTop)}%`,
					end: "bottom 20%",
					scrub: true,
				},
			});
			gsap.to(title, {
				opacity: 0,
				scrollTrigger: {
					trigger: title,
					start: `top 40%`,
					end: "bottom 20%",
					scrub: true,
				},
			});
		}

		const ss = slideShowRef.current;
		if (ss) {
			gsap.to(ss, {
				opacity: 1,
				scale: 1,
				marginTop: "0",
				scrollTrigger: {
					trigger: ss,
					start: "top 100%",
					end: "top 30%",
					scrub: true,
				},
			});
			gsap.to(ss, {
				backgroundSize: "140%",
				backgroundPositionY: "30%",
				scrollTrigger: {
					trigger: ss,
					start: "top 60%",
					scrub: true,
				},
			});
		}
	}, []);

	return (
		<>
			<Head>
				<title>Project Title</title>
			</Head>

			<main>
				<div className={styles.page} page-index="1" id="page">
					<div></div>
					<div className={styles.landing}>
						<div className={styles.title} ref={titleRef}>
							<span cursor-class="grow">Worldwide</span>
							<span cursor-class="grow">Clean Water</span>
						</div>
					</div>
				</div>
				<div className={styles.page} page-index="2" id="page">
					<div
						className={styles.content}
						id="slideShow"
						ref={slideShowRef}
					>
						<Image
							src="/images/beach1.jpg"
							alt="OverScroll Picture"
							priority
							fill
						/>
						<div className={styles.card}>
							<div className={styles.cardContent}>
								<h2>Pollution of Beaches</h2>
								<p>
									The water scarcity has been increasing at a
									rapid speed since ages. This has lead to
									mass amount of water being polluted and very
									less safe water for daily purposes. If we
									don&apos;t take measures against this,
									There&apos;s only harm to our dream of a
									sustainable future.
								</p>
							</div>
						</div>
						<div className={styles.card}>
							<div className={styles.cardContent}>
								<h2>Pollution of Beaches</h2>
								<p>
									The water scarcity has been increasing at a
									rapid speed since ages. This has lead to
									mass amount of water being polluted and very
									less safe water for daily purposes. If we
									don&apos;t take measures against this,
									There&apos;s only harm to our dream of a
									sustainable future.
								</p>
							</div>
						</div>
						<div className={styles.card}>
							<div className={styles.cardContent}>
								<h2>Pollution of Beaches</h2>
								<p>
									The water scarcity has been increasing at a
									rapid speed since ages. This has lead to
									mass amount of water being polluted and very
									less safe water for daily purposes. If we
									don&apos;t take measures against this,
									There&apos;s only harm to our dream of a
									sustainable future.
								</p>
							</div>
						</div>
						<div className={styles.card}>
							<div className={styles.cardContent}>
								<h2>Pollution of Beaches</h2>
								<p>
									The water scarcity has been increasing at a
									rapid speed since ages. This has lead to
									mass amount of water being polluted and very
									less safe water for daily purposes. If we
									don&apos;t take measures against this,
									There&apos;s only harm to our dream of a
									sustainable future.
								</p>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}

export default HomePage;
