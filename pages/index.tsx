import styles from "@/styles/Home.module.css";
import Head from "next/head";
import Lenis from "@studio-freight/lenis";

function HomePage() {
	return (
		<>
			<Head>
				<title> Project Title </title>
			</Head>

			<main>
				<div className={styles.noise}></div>

				<div className={styles.page}>
					<div className={styles.inner}></div>
				</div>
				<div className={styles.page}>
					<div className={styles.inner}></div>
				</div>
			</main>
		</>
	);
}

function useLenis() {
	var lenis = new Lenis();
	function raf(time: any) {
		lenis.raf(time);
		requestAnimationFrame(raf);
	}	requestAnimationFrame(raf);
  return lenis;
}

export default HomePage;
