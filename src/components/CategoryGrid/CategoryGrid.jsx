import styles from "./CategoryGrid.module.css";
import CategoryCard from "./CategoryCard";

const categories = [
  { name: "Laptops", count: 45 },
  { name: "Componentes", count: 120 },
  { name: "Periféricos", count: 89 },
  { name: "Monitores", count: 32 },
  { name: "Audio", count: 56 },
  { name: "Almacenamiento", count: 42 },
  { name: "Redes", count: 28 },
  { name: "Gaming", count: 63 },
];

const CategoryGrid = () => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Explora por Categoría</h2>
        <p className={styles.subtitle}>
          Componentes y dispositivos de última generación
        </p>
      </div>
      <div className={styles.grid}>
        {categories.map((category, index) => (
          <CategoryCard key={index} category={category} />
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
