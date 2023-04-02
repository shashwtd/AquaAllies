import styles from "./Header.module.css";
import Link from "next/link";
import { HideCursor } from "../cursor/Cursor";

export default function Header() {
  return (
    <div className={styles.header}>
      <Link href="/">
        <h1 className={styles.headerTitle} cursor-class="subtle">
          Wotah.
        </h1>
      </Link>
      <div className={styles.options}>
        <Link href="/goals">
          <span cursor-class="overlay">goals</span>
        </Link>
        <Link href="/reports">
          <span cursor-class="overlay">reports</span>
        </Link>
        <Link href="/more">
          <span cursor-class="overlay">more</span>
        </Link>
      </div>
      <div className={styles.action}>
        <span
          className={styles.actionButton}
          cursor-class="overlay"
          onClick={HideCursor}
        >
          Contribute
          <span>→</span>
        </span>
      </div>
    </div>
  );
}
