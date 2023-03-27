import styles from "./Header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <div className={styles.header}>
      <Link href="/">
        <h1 className={styles.headerTitle} cursor-class="subtle">
          Wotah.
        </h1>
      </Link>
      <div className={styles.options}>
        <span cursor-class="overlay">Showreel</span>
        <span cursor-class="overlay">Reports</span>
        <Link href="/more">
          <span cursor-class="overlay">more</span>
        </Link>
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
