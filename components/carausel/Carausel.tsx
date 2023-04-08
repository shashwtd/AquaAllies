import styles from "./Carausel.module.css";
import Image from "next/image";
import { useEffect } from "react";

const Carausel = () => {
  useEffect(() => {
    const next = document.querySelector("." + styles.next);
    const prev = document.querySelector("." + styles.prev);
    const carausel = document.querySelector("." + styles.carausel__wrapper);

    if (next && prev && carausel) {
      next.addEventListener("click", () => {
        carausel.scrollLeft += 500;
      });
      prev.addEventListener("click", () => {
        carausel.scrollLeft -= 500;
      });
    }
  }, []);

  return (
    <div className={styles.carausel} cursor-class="hide">
      <div className={styles.prev}>&#10094;</div>
      <div className={styles.carausel__wrapper} cursor-class="hide">
        {[...Array(17)].map((_, i) => (
          <div className={styles.carausel__item} key={i} cursor-class="hide">
            <a
              href={"https://sdgs.un.org/goals/goal" + (i + 1)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.carausel__imWrapper}>
                <Image
                  src={`/images/sdgs/sdg${i + 1}.png`}
                  alt={"SDG -> " + (i + 1)}
                  width={1024}
                  height={320}
                  quality={100}
                  className={styles.carausel__image}
                  priority
                />
              </div>
            </a>
          </div>
        ))}
      </div>
      <div className={styles.next}>&#10095;</div>
    </div>
  );
};

export default Carausel;
