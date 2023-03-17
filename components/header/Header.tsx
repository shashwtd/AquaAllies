import styles from "./Header.module.css";

export default function Header() {
	
	return (
		<div className={styles.header}>
			<h1 className={styles.headerTitle}>Wotah.</h1>
			<div className={styles.options}>
				<span>Showreel</span>
				<span>Reports</span>
				<span>venue</span>
			</div>
			<div className={styles.action}>
				<span className={styles.actionButton}>
					Contribute
					<span>→</span>
				</span>
			</div>
		</div>
	);
}
