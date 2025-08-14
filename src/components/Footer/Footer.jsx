import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h3 className={styles.logo}>TechNova</h3>
          <p className={styles.description}>
            Tecnología de vanguardia con garantía y soporte profesional.
            Innovación al alcance de todos.
          </p>
          <div className={styles.social}>
            <a href="#" className={styles.socialLink}>
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className={styles.socialLink}>
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className={styles.socialLink}>
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className={styles.socialLink}>
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        <div className={styles.column}>
          <h4 className={styles.title}>Productos</h4>
          <ul className={styles.list}>
            <li>
              <a href="#" className={styles.link}>
                Smartphones
              </a>
            </li>
            <li>
              <a href="#" className={styles.link}>
                Laptops
              </a>
            </li>
            <li>
              <a href="#" className={styles.link}>
                Audio
              </a>
            </li>
            <li>
              <a href="#" className={styles.link}>
                Accesorios
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4 className={styles.title}>Soporte</h4>
          <ul className={styles.list}>
            <li>
              <a href="#" className={styles.link}>
                Centro de ayuda
              </a>
            </li>
            <li>
              <a href="#" className={styles.link}>
                Garantías
              </a>
            </li>
            <li>
              <a href="#" className={styles.link}>
                Reparaciones
              </a>
            </li>
            <li>
              <a href="#" className={styles.link}>
                Preguntas técnicas
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4 className={styles.title}>Contacto</h4>
          <ul className={styles.list}>
            <li>Av. Tecnología 1234</li>
            <li>contacto@technova.com</li>
            <li>+1 (555) 123-4567</li>
            <li>Lun-Vie: 9am - 7pm</li>
          </ul>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>
          &copy; {new Date().getFullYear()} TechNova Electronics. Todos los
          derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
