import styles from "./footer.module.css";
import logo from "../../assets/logo.png";

export const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <hr className={styles.hr} />
        <div className={styles.contain}>
          <div className={styles.contato}>
            <a href="/" onClick={() => window.location.reload()}>
              <img className={styles.img} src={logo} alt="" />
            </a>
            <ul>
              <li><a></a></li>
              <li><a></a></li>
              <li><a></a></li>
              <li><a></a></li>
              <li><a></a></li>
            </ul>
          </div>

          <div className={styles.container}>
            <p>© 2026 • The MYTHZ</p>

            <nav>
              <a href="#home">Home</a>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
};
