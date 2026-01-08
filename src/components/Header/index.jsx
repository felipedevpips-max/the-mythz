
import styles from "./header.module.css";
import logo from "../../assets/logo.png";
import { Hamburguer } from "../Hamburguer";

export const Header = () => {

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
          <Hamburguer/>
          
        </div>
      </header>
    </>
  );
};
