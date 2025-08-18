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
  GiWashingMachine,
  GiElectric,
  GiVacuumCleaner,
  GiKitchenScale,
  GiCoffeeCup,
  GiToaster,
} from "react-icons/gi";
import { BiFridge, BiTv } from "react-icons/bi";
import { MdMicrowave, MdIron, MdOutlineAir } from "react-icons/md";
import { IoWaterOutline } from "react-icons/io5";
import styles from "./ElectroCarousel.module.css";

// Importa todas las imágenes locales
import lavadoraImg from "../../assets/images/lavadora.png";
import refrigeradorImg from "../../assets/images/refrigerador.png";
import hornoImg from "../../assets/images/horno.png";
import microondasImg from "../../assets/images/microondas.png";
import aspiradoraImg from "../../assets/images/aspiradora.png";
import planchaImg from "../../assets/images/plancha.png";
import tostadoraImg from "../../assets/images/tostadora.png";
import cafeteraImg from "../../assets/images/cafetera.png";
import tvImg from "../../assets/images/tv.png";
import aireImg from "../../assets/images/aire.png";

const CATEGORIES_WITH_IMAGES = [
  "Lavadora",
  "Refrigerador",
  "Horno",
  "Microondas",
  "Aspiradora",
  "Plancha",
  "Tostadora",
  "Cafetera",
  "Televisor",
  "Aire Acondicionado",
];

const getImageByCategory = (category) => {
  const cat = (category || "").toLowerCase();
  if (cat.includes("lavadora")) return lavadoraImg;
  if (cat.includes("refrigerador") || cat.includes("nevera"))
    return refrigeradorImg;
  if (cat.includes("horno")) return hornoImg;
  if (cat.includes("microondas")) return microondasImg;
  if (cat.includes("aspiradora")) return aspiradoraImg;
  if (cat.includes("plancha")) return planchaImg;
  if (cat.includes("tostadora")) return tostadoraImg;
  if (cat.includes("cafetera")) return cafeteraImg;
  if (cat.includes("tv") || cat.includes("televisor")) return tvImg;
  if (cat.includes("aire acondicionado")) return aireImg;
  return null;
};

const ElectroCarousel = ({ title, description, products = [], addToCart }) => {
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const validProducts = products.filter((product) => {
    return product.image || getImageByCategory(product.category) !== null;
  });

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
              return {
                id: `demo-${i}`,
                name: `${category} Modelo ${i + 1}`,
                category,
                image: getImageByCategory(category),
                price: (i + 5) * 10000,
                rating: (4 + Math.random()).toFixed(1),
                isNew: i % 3 === 0,
                discount: i % 4 === 0 ? 15 : 0,
                features: [
                  `Color ${["Blanco", "Negro", "Plateado"][i % 3]}`,
                  `${["Pequeño", "Mediano", "Grande"][i % 3]} capacidad`,
                ],
                inStock: i % 5 !== 0,
                fastShipping: i % 2 === 0,
              };
            }),
        ];

  const handleScroll = (direction) => {
    const container = carouselRef.current;
    const scrollAmount = direction === "left" ? -400 : 400;
    container?.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const startDrag = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current?.offsetLeft);
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const duringDrag = (e) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const endDrag = () => {
    setIsDragging(false);
  };

  const getCategoryIcon = (category) => {
    const cat = (category || "").toString().toLowerCase();
    if (cat.includes("lavadora")) return <GiWashingMachine />;
    if (cat.includes("refrigerador") || cat.includes("nevera"))
      return <BiFridge />;
    if (cat.includes("televisor") || cat.includes("tv")) return <BiTv />;
    if (cat.includes("horno")) return <GiElectric />;
    if (cat.includes("aire acondicionado")) return <MdOutlineAir />;
    if (cat.includes("aspiradora")) return <GiVacuumCleaner />;
    if (cat.includes("microondas")) return <MdMicrowave />;
    if (cat.includes("plancha")) return <MdIron />;
    if (cat.includes("tostadora")) return <GiToaster />;
    if (cat.includes("cafetera")) return <GiCoffeeCup />;
    return <GiElectric />;
  };

  return (
    <section className={styles.electroSection}>
      <div className={styles.header}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>
            {title || "Electrodomésticos Premium"}
          </h2>
          <p className={styles.subtitle}>
            {description || "Productos seleccionados cuidadosamente"}
          </p>
        </div>
        <div className={styles.controls}>
          <button
            onClick={() => handleScroll("left")}
            aria-label="Anterior"
            className={styles.controlBtn}
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={() => handleScroll("right")}
            aria-label="Siguiente"
            className={styles.controlBtn}
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
        <div className={styles.carouselTrack}>
          {displayedProducts.map((product) => {
            const imageSrc =
              product.image || getImageByCategory(product.category);

            return (
              <article key={product.id} className={styles.productCard}>
                <div className={styles.productBadges}>
                  {product.isNew && (
                    <span className={styles.newBadge}>Nuevo</span>
                  )}
                  {product.discount > 0 && (
                    <span className={styles.discountBadge}>
                      -{product.discount}%
                    </span>
                  )}
                  <span className={styles.ratingBadge}>
                    <FaStar /> {product.rating || 4.5}
                  </span>
                </div>

                <div className={styles.productImage}>
                  {imageSrc ? (
                    <img
                      src={imageSrc}
                      alt={product.name}
                      loading="lazy"
                      className={styles.productImg}
                    />
                  ) : (
                    <div className={styles.iconPlaceholder}>
                      {getCategoryIcon(product?.category)}
                    </div>
                  )}
                </div>

                <div className={styles.productInfo}>
                  <h3 className={styles.productTitle}>
                    {product.name || "Producto"}
                  </h3>
                  <div className={styles.specs}>
                    {(product.features || []).slice(0, 2).map((feature, i) => (
                      <span key={i} className={styles.specItem}>
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className={styles.priceSection}>
                    <div className={styles.prices}>
                      <span className={styles.currentPrice}>
                        ${(product.price || 0).toLocaleString()}
                      </span>
                      {product.discount > 0 && (
                        <span className={styles.oldPrice}>
                          $
                          {Math.round(
                            product.price / (1 - product.discount / 100)
                          ).toLocaleString()}
                        </span>
                      )}
                    </div>

                    <div className={styles.deliveryInfo}>
                      {product.fastShipping ? (
                        <span>
                          <FaTruck /> Envío rápido
                        </span>
                      ) : (
                        <span>
                          <FaBolt /> {product.inStock ? "En stock" : "Agotado"}
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => addToCart(product)}
                    className={`${styles.addToCartBtn} ${
                      !product.inStock ? styles.disabled : ""
                    }`}
                    disabled={!product.inStock}
                    aria-label={`Añadir ${product.name} al carrito`}
                  >
                    <FaShoppingCart />
                    {product.inStock ? "Añadir al carrito" : "Agotado"}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ElectroCarousel;
