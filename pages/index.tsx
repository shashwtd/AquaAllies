import styles from "@/styles/Home.module.css";
import Head from "next/head";

function HomePage() {
	return (
		<>
			<Head>
				<title> Project Title </title>
			</Head>

			<main>
				<div className={styles.page}>
					<div className={styles.landing}>
						<div className={styles.title}>
							<span cursor-class='grow'>Worldwide</span>
							<span cursor-class='grow'>Clean Oceans</span>
						</div>
					</div>
				</div>
				<div className={styles.page}>

				</div>
			</main>
		</>
	);
}

export default HomePage;
