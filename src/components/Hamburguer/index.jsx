import { useState } from "react";
import styles from "./hamburguer.module.css";

export const Hamburguer = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
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
    </>
  );
};
