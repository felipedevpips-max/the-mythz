
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
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#sobre">Sobre</a>
            </li>
            <li>
              <a href="#integrantes">Integrantes</a>
            </li>
            <li>
              <a href="#contato">Contato</a>
            </li>
            <li>
              <a href="#shows">Shows</a>
            </li>
          </ul>
          <Hamburguer/>
          
        </div>
      </header>
    </>
  );
};
