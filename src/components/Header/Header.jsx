import styles from "./Header.module.css";
import { FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";
import { FaMicrochip } from "react-icons/fa";

const Header = ({ cartCount, searchTerm, setSearchTerm, handleSearch }) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <FaMicrochip className={styles.logoIcon} />
          <span className={styles.logo}>TechNova</span>
        </div>

        <form onSubmit={handleSearch} className={styles.searchForm}>
          <input
            type="text"
            placeholder="Buscar productos, marcas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
          <button type="submit" className={styles.searchButton}>
            <FiSearch className={styles.searchIcon} />
          </button>
        </form>

        <div className={styles.actions}>
          <button className={styles.accountButton}>
            <FiUser className={styles.icon} />
            <span>Mi Cuenta</span>
          </button>
          <button className={styles.cartButton}>
            <FiShoppingCart className={styles.icon} />
            {cartCount > 0 && (
              <span className={styles.cartCount}>{cartCount}</span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
