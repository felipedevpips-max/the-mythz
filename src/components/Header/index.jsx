
import styles from "./header.module.css";
import logo from "../../assets/logo.png";
import { Hamburguer } from "../Hamburguer";

export const Header = () => {

  return (
    <>
      <header className={styles.header}>
        <div className={styles.div}>
          <a href="#home" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <img className={styles.img} src={logo} alt="" />
          </a>
          
          <ul className={styles.ul}>
            <li>
              <a href="#home"onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Home</a>
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
