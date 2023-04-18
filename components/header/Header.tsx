import styles from "./Header.module.css";
import Pass from "@/components/pass/Pass";
import { showPlayer } from "../player/Player";

export default function Header() {
  function showMenu() {

  }
  return (
    <div className={styles.header}>
      <div className={styles.inner}>
        <Pass href="/">
          <h1 className={styles.headerTitle}>AquaAlly.</h1>
        </Pass>
        <div className={styles.options}>
          <Pass href="/">
            <span>home</span>
          </Pass>
          <Pass href="/goals">
            <span>goals</span>
          </Pass>
          <Pass href="/contribute">
            <span>contribute</span>
          </Pass>
        </div>
        <div className={styles.action}>
          <span className={styles.actionButton} onClick={showPlayer} btn-action="player">
            Showreel
            <span>→</span>
          </span>
          <span className={styles.actionButton} onClick={showMenu} btn-action="menu">
            Menu
            <span>→</span>
          </span>
        </div>
      </div>
    </div>
  );
}
