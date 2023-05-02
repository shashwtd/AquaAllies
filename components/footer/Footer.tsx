import { useRouter } from "next/router";
import styles from "./Footer.module.css";

export default function Footer(prop: { scrollTop: any }) {
  const router = useRouter();
  return (
    <div id="daFooter" className={styles.footer} onClick={prop.scrollTop}></div>
  );
}
