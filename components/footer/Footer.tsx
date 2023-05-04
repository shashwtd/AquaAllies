import { useRouter } from "next/router";
import styles from "./Footer.module.css";

export default function Footer(prop: { scrollTop: any }) {
  const router = useRouter();
  return (
    <>
      <div className={styles.lane}>
        <div className={styles.inner}>
          <>
            <p className={styles.proj}>©️ {new Date().getFullYear()} AquaAllies</p>
          </>
          <>
            <ul>
              <li>
                <a
                  href="http://github.com/shashwtt/AquaAllies"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Project Repo
                </a>
              </li>
              <li>
                <a
                  href="http://github.com/shashwtt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </li>
              <li>
                <a href="mailto:shashwat5590@gmail.com">Email</a>
              </li>
            </ul>
          </>
        </div>
      </div>
      <div
        id="daFooter"
        className={styles.footer}
        onClick={prop.scrollTop}
      ></div>
    </>
  );
}
