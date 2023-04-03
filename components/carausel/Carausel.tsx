import styles from "./Carausel.module.css";
import Image from "next/image";

const Carausel = () => {
  return (
    <div className={styles.carausel} cursor-class="hide">
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
                />
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carausel;
