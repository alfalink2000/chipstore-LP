import { useState } from "react";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import CategoryGrid from "./components/CategoryGrid/CategoryGrid";
import ElectroCarousel from "./components/ProductCarousel/ElectroCarousel";
import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts";
import Benefits from "./components/Benefits/Benefits";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
import { categories, products, benefits } from "./data";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cartCount, setCartCount] = useState(0);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      alert(`Buscando: ${searchTerm}`);
    }
  };

  const addToCart = (id) => {
    setCartCount((prev) => prev + 1);
    alert(`Pastel añadido al carrito`);
  };

  return (
    <div className={styles.app}>
      <Header
        cartCount={cartCount}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />
      <main>
        <HeroBanner />
        <CategoryGrid categories={categories} />
        <ElectroCarousel
          products={products.slice(0, 4)}
          addToCart={addToCart}
        />
        <FeaturedProducts
          products={products}
          addToCart={addToCart}
          title="Lo Productos más Destacados"
          subtitle="Los más vendidos de la temporada"
        />
        <Benefits benefits={benefits} />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default App;
