import styles from "./Header.module.css";
import { HideCursor } from "../cursor/Cursor";
import Pass from "@/components/pass/Pass";

export default function Header() {
  return (
    <div className={styles.header}>
      <Pass href="/">
        <h1 className={styles.headerTitle} cursor-class="subtle">
          Wotah.
        </h1>
      </Pass>
      <div className={styles.options}>
        <Pass href="/goals">
          <span cursor-class="overlay">goals</span>
        </Pass>
        <Pass href="/reports">
          <span cursor-class="overlay">reports</span>
        </Pass>
        <Pass href="/solutions">
          <span cursor-class="overlay">solutions</span>
        </Pass>
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
