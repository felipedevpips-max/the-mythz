
import styles from "./header.module.css";
import logo from "../../assets/logo.png";
import { Hamburguer } from "../Hamburguer";

export const Header = () => {

  return (
    <>
      <header className={styles.header}>
        <div className={styles.div}>
          <a href="/" onClick={() => window.location.reload()}>
            <img className={styles.img} src={logo} alt="The MYTHZ logo" />
          </a>
          
          <ul className={styles.ul}>
            <li>
              <a href="/" onClick={() => window.location.reload()}>Home</a>
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
            
          </ul>
          <Hamburguer/>
          
        </div>
      </header>
    </>
  );
};
