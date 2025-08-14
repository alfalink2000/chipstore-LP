import { useRef, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaStar,
  FaShoppingCart,
  FaTruck,
  FaBolt,
} from "react-icons/fa";
import {
  GiKeyboard,
  GiConsoleController,
  GiSpeaker,
  GiMicrophone,
  GiProcessor,
  GiSmartphone,
  GiLaptop,
} from "react-icons/gi";
import { FaChair } from "react-icons/fa";
import { BiDesktop } from "react-icons/bi";
import { MdMouse, MdPhoneIphone } from "react-icons/md";
import { IoHeadset } from "react-icons/io5";
import styles from "./FeaturedProducts.module.css";

// Importar imágenes locales
import tecladoImg from "../../assets/images/teclado.png";
import kitImg from "../../assets/images/kit.png";
import audiImg from "../../assets/images/audifonos.png";
import kitgamerImg from "../../assets/images/kitgamer.png";
import mauseImg from "../../assets/images/mause.png";
import torrepcImg from "../../assets/images/torrepc.png";
import sillagamerImg from "../../assets/images/sillagamer.png";
import movilImg from "../../assets/images/movil.png";

// Lista de categorías que tienen imágenes disponibles
const CATEGORIES_WITH_IMAGES = [
  "Teclado Mecánico",
  "Kit Gamer",
  "Audifonos",
  "Mause Inalámbrico",
  "Torre PC",
  "Silla Gamer",
  "Movil Android",
  "Kit Oficina",
];

// Mapeo de categorías a imágenes
const getImageByCategory = (category) => {
  const cat = (category || "").toLowerCase();
  if (cat.includes("teclado")) return tecladoImg;
  if (cat.includes("kit") && cat.includes("gamer")) return kitgamerImg;
  if (cat.includes("kit")) return kitImg;
  if (cat.includes("audi") || cat.includes("audio")) return audiImg;
  if (cat.includes("mause") || cat.includes("ratón") || cat.includes("mouse"))
    return mauseImg;
  if (
    cat.includes("torre") ||
    cat.includes("pc") ||
    cat.includes("computadora")
  )
    return torrepcImg;
  if (cat.includes("silla") || cat.includes("sillagamer")) return sillagamerImg;
  if (
    cat.includes("movil") ||
    cat.includes("móvil") ||
    cat.includes("celular") ||
    cat.includes("smartphone")
  )
    return movilImg;
  return null;
};

// Mapeo de categorías a iconos
const getCategoryIcon = (category) => {
  const cat = (category || "").toLowerCase();
  if (cat.includes("teclado")) return <GiKeyboard />;
  if (cat.includes("mause") || cat.includes("ratón") || cat.includes("mouse"))
    return <MdMouse />;
  if (cat.includes("torre") || cat.includes("pc") || cat.includes("desktop"))
    return <BiDesktop />;
  if (cat.includes("silla") || (cat.includes("gamer") && cat.includes("silla")))
    return <FaChair />;
  if (cat.includes("movil") || cat.includes("celular"))
    return <MdPhoneIphone />;
  if (cat.includes("audi") || cat.includes("audio") || cat.includes("headset"))
    return <IoHeadset />;
  if (cat.includes("kit") && cat.includes("gamer"))
    return <GiConsoleController />;
  if (cat.includes("kit")) return <GiLaptop />;
  if (cat.includes("torre") || cat.includes("procesador"))
    return <GiProcessor />;
  return <GiLaptop />;
};

const FeaturedProducts = ({ title, subtitle, products = [], addToCart }) => {
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Filtramos los productos para mostrar solo los que tienen imagen
  const validProducts = products.filter((product) => {
    return product.image || getImageByCategory(product.category) !== null;
  });

  // Si hay menos de 8 productos válidos, completamos con productos demo que sabemos tienen imágenes
  const displayedProducts =
    validProducts.length >= 8
      ? validProducts
      : [
          ...validProducts,
          ...Array(
            Math.min(8 - validProducts.length, CATEGORIES_WITH_IMAGES.length)
          )
            .fill()
            .map((_, i) => {
              const category =
                CATEGORIES_WITH_IMAGES[i % CATEGORIES_WITH_IMAGES.length];
              const image = getImageByCategory(category);

              return {
                id: `demo-${i}`,
                name: `${["Hyper", "Pro", "Ultra", "Nova"][i % 4]} ${category}`,
                category,
                image,
                price: Math.floor(Math.random() * 1500000) + 300000,
                originalPrice: Math.floor(Math.random() * 500000) + 1800000,
                rating: (4.3 + Math.random() * 0.7).toFixed(1),
                isNew: i % 3 === 0,
                fastDelivery: true,
                inStock: true,
                specs: [
                  ["RGB", "8GB RAM", "Bluetooth 5.0", "120Hz"][i % 4],
                  [
                    "Switches Blue",
                    "Diseño ergonómico",
                    "Cancelación activa",
                    "Alta resolución",
                  ][i % 4],
                ],
              };
            }),
        ];

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const startDrag = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const duringDrag = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const endDrag = () => {
    setIsDragging(false);
  };

  // Componente interno: ProductCard
  const ProductCard = ({ product }) => {
    const imageSrc = product.image || getImageByCategory(product.category);

    return (
      <div className={styles.productCard}>
        <div className={styles.imageContainer}>
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={product.name}
              className={styles.productImage}
              loading="lazy"
            />
          ) : (
            <div className={styles.imagePlaceholder}>
              {getCategoryIcon(product.category)}
            </div>
          )}

          {product.isNew && <span className={styles.newBadge}>Nuevo</span>}
          <div className={styles.rating}>
            <FaStar className={styles.starIcon} /> {product.rating || "4.5"}
          </div>
        </div>

        <div className={styles.productInfo}>
          <h3 className={styles.productName}>{product.name}</h3>

          <div className={styles.specs}>
            {product.specs?.slice(0, 2).map((spec, idx) => (
              <span key={idx} className={styles.specItem}>
                {spec}
              </span>
            ))}
          </div>

          <div className={styles.priceContainer}>
            <span className={styles.currentPrice}>
              ${product.price?.toLocaleString() || "0"}
            </span>
            {product.originalPrice && (
              <span className={styles.originalPrice}>
                ${product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>

          <div className={styles.deliveryInfo}>
            {product.fastDelivery && (
              <span className={styles.delivery}>
                <FaTruck /> Envío rápido
              </span>
            )}
            <span
              className={product.inStock ? styles.inStock : styles.outOfStock}
            >
              <FaBolt /> {product.inStock ? "Disponible" : "Agotado"}
            </span>
          </div>

          <button
            className={styles.addToCartBtn}
            onClick={() => addToCart(product)}
            disabled={!product.inStock}
          >
            <FaShoppingCart />{" "}
            {product.inStock ? "Añadir al carrito" : "Sin stock"}
          </button>
        </div>
      </div>
    );
  };

  return (
    <section className={styles.featuredSection}>
      <div className={styles.sectionHeader}>
        <div className={styles.headerText}>
          <h2 className={styles.sectionTitle}>{title}</h2>
          {subtitle && <p className={styles.sectionSubtitle}>{subtitle}</p>}
        </div>
        <div className={styles.controls}>
          <button
            onClick={() => scroll("left")}
            className={styles.controlButton}
            aria-label="Anterior"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={() => scroll("right")}
            className={styles.controlButton}
            aria-label="Siguiente"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      <div
        className={styles.carouselContainer}
        ref={carouselRef}
        onMouseDown={startDrag}
        onMouseLeave={endDrag}
        onMouseUp={endDrag}
        onMouseMove={duringDrag}
      >
        <div className={styles.carousel}>
          {displayedProducts.map((product) => (
            <div key={product.id} className={styles.carouselItem}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
