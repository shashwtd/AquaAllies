import { useRouter } from "next/router";
import styles from "./Footer.module.css";

export default function Footer(prop: { scrollTop: any }) {
  const router = useRouter();
  if (router.pathname === "/goals") return null;
  return (
    <div
      className={styles.footer}
      cursor-class="hide"
      onClick={prop.scrollTop}
    ></div>
  );
}
