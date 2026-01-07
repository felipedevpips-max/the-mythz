import { useState } from "react";
import styles from "./header.module.css";
import logo from "../../assets/logo.png";

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className={styles.header}>
        <div className={styles.div}>
          <img className={styles.img} src={logo} alt="" />
          <ul className={styles.ul}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Sobre</a>
            </li>
            <li>
              <a href="#">Integrantes</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
            <li>
              <a href="#">Shows</a>
            </li>
          </ul>
          <div className={styles.hamburguer} onClick={() => setOpen(!open)}>
            <span className={open ? styles.active : ""}></span>
            <span className={open ? styles.active : ""}></span>
            <span className={open ? styles.active : ""}></span>
          </div>
          <ul className={`${styles.mobileMenu} ${open ? styles.open : ""}`}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Sobre</a>
            </li>
            <li>
              <a href="#">Integrantes</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
            <li>
              <a href="#">Shows</a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};
