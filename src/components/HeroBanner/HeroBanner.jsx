import styles from "./HeroBanner.module.css";
import { FaArrowRight } from "react-icons/fa";

const HeroBanner = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Tecnología de <span className={styles.highlight}>Vanguardia</span>
        </h1>
        <p className={styles.subtitle}>
          Descubre los últimos componentes y dispositivos para tu setup ideal
        </p>
        <button className={styles.ctaButton}>
          Explorar Catálogo <FaArrowRight className={styles.ctaIcon} />
        </button>
      </div>
      <div className={styles.overlay}></div>
    </section>
  );
};

export default HeroBanner;
