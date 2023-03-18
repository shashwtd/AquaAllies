import styles from "./Header.module.css";

export default function Header() {
	
	return (
		<div className={styles.header}>
			<h1 className={styles.headerTitle} cursor-class="subtle">Wotah.</h1>
			<div className={styles.options}>
				<span cursor-class="overlay">Showreel</span>
				<span cursor-class="overlay">Reports</span>
				<span cursor-class="overlay">venue</span>
			</div>
			<div className={styles.action}>
				<span className={styles.actionButton} cursor-class="overlay">
					Contribute
					<span>→</span>
				</span>
			</div>
		</div>
	);
}
