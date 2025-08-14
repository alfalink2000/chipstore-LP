// BenefitCard.js
import styles from "./Benefits.module.css";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

const BenefitCard = ({ benefit, index }) => {
  return (
    <motion.div
      className={styles.card}
      variants={cardVariants}
      custom={index}
      whileHover={{ scale: 1.05 }}
    >
      <div className={styles.iconContainer}>
        <div className={styles.iconBackground}>{benefit.icon}</div>
      </div>
      <h3 className={styles.title}>{benefit.title}</h3>
      <p className={styles.description}>{benefit.desc}</p>
    </motion.div>
  );
};

export default BenefitCard;
