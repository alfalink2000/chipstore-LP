import styles from "./HeroBanner.module.css";
import { FaArrowRight } from "react-icons/fa";
import backgroundImage from "../../assets/images/background.png"; // Asegúrate de que la ruta es correcta

const HeroBanner = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundWrapper}>
        <img
          src={backgroundImage}
          alt=""
          className={styles.backgroundImage}
          loading="lazy"
        />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Tecnología de<span className={styles.highlight}>Vanguardia</span>
        </h1>
        <p className={styles.subtitle}>
          Descubre los últimos componentes y dispositivos para tu setup ideal
        </p>
        <button className={styles.ctaButton}>
          Explorar Catálogo <FaArrowRight className={styles.ctaIcon} />
        </button>
      </div>
      <div className={styles.techOverlay} />
      <div className={styles.gradientOverlay} />
    </section>
  );
};

export default HeroBanner;
