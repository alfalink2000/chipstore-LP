import styles from "./Newsletter.module.css";

const Newsletter = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>¡Mantente Actualizado!</h2>
        <p className={styles.subtitle}>
          Recibe las últimas noticias de tecnología, ofertas exclusivas y
          lanzamientos de productos
        </p>
        <form className={styles.form}>
          <input
            type="email"
            placeholder="Ingresa tu correo electrónico"
            className={styles.input}
            required
          />
          <button type="submit" className={styles.button}>
            Suscribirse
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
