import styles from "./CategoryGrid.module.css";
import {
  FaLaptop, // Laptops
  FaMicrochip, // Componentes
  FaKeyboard, // Periféricos
  FaTv, // Monitores
  FaHeadphones, // Audio
  FaHdd, // Almacenamiento
  FaNetworkWired, // Redes
  FaGamepad, // Gaming
} from "react-icons/fa";

const iconComponents = {
  Laptops: FaLaptop,
  Componentes: FaMicrochip,
  Periféricos: FaKeyboard,
  Monitores: FaTv,
  Audio: FaHeadphones,
  Almacenamiento: FaHdd,
  Redes: FaNetworkWired,
  Gaming: FaGamepad,
};

const CategoryCard = ({ category }) => {
  const IconComponent = iconComponents[category.name] || FaMicrochip;

  return (
    <div className={styles.card} data-category={category.name.toLowerCase()}>
      <div className={styles.iconContainer}>
        <IconComponent className={styles.icon} />
        <div className={styles.hoverEffect}></div>
      </div>
      <h3 className={styles.name}>{category.name}</h3>
      <p className={styles.count}>{category.count}+ productos</p>
    </div>
  );
};

export default CategoryCard;
